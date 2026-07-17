const assert = require('node:assert/strict');
const path = require('node:path');
const test = require('node:test');

const modulePath = path.join(__dirname, '..', 'wallet-sync-transport.js');
let transportModule = null;
try {
  transportModule = require(modulePath);
} catch {}

test('confirms a queued beacon without waiting for the POST response', async () => {
  assert.equal(typeof transportModule?.createTransport, 'function',
    'wallet sync transport must expose createTransport');

  const calls = [];
  const transport = transportModule.createTransport({
    navigatorRef: {
      sendBeacon(endpoint, body) {
        calls.push(['beacon', endpoint, body]);
        return true;
      }
    },
    fetchRef() {
      calls.push(['fetch']);
      return new Promise(() => {});
    },
    verifyStatus: async (endpoint, token, jobId) => {
      calls.push(['verify', endpoint, token, jobId]);
      return true;
    },
    wait: async () => {}
  });

  const confirmed = await transport.transmitJob(
    { jobId: 'job-1', expenseId: 'expense-1' },
    { endpoint: 'https://script.google.com/macros/s/test/exec', token: 'private-token' }
  );

  assert.equal(confirmed, true);
  assert.equal(calls.filter(([type]) => type === 'beacon').length, 1);
  assert.equal(calls.filter(([type]) => type === 'fetch').length, 0);
  assert.deepEqual(calls.find(([type]) => type === 'verify')?.slice(1), [
    'https://script.google.com/macros/s/test/exec',
    'private-token',
    'job-1'
  ]);
});

test('falls back to a non-blocking fetch when sendBeacon cannot queue the job', async () => {
  assert.equal(typeof transportModule?.createTransport, 'function',
    'wallet sync transport must expose createTransport');

  let fetchStarted = false;
  const transport = transportModule.createTransport({
    navigatorRef: { sendBeacon: () => false },
    fetchRef() {
      fetchStarted = true;
      return new Promise(() => {});
    },
    verifyStatus: async () => true,
    wait: async () => {}
  });

  const confirmed = await transport.transmitJob(
    { jobId: 'job-2', expenseId: 'expense-2' },
    { endpoint: 'https://script.google.com/macros/s/test/exec', token: 'private-token' }
  );

  assert.equal(fetchStarted, true);
  assert.equal(confirmed, true);
});

test('finds wallet records that are unresolved even when the queue is empty', () => {
  assert.equal(typeof transportModule?.findMissingSyncExpenses, 'function',
    'wallet sync transport must expose findMissingSyncExpenses');
  assert.equal(typeof transportModule?.countOutstandingSyncRecords, 'function',
    'wallet sync transport must expose countOutstandingSyncRecords');

  const expenses = [
    { id: 'expense-pending', syncStatus: 'pending' },
    { id: 'expense-local', syncStatus: 'local' },
    { id: 'expense-synced', syncStatus: 'synced' }
  ];
  const queue = [];

  assert.deepEqual(
    transportModule.findMissingSyncExpenses(expenses, queue).map(item => item.id),
    ['expense-pending', 'expense-local']
  );
  assert.equal(transportModule.countOutstandingSyncRecords(expenses, queue), 2);
});

test('does not duplicate an unresolved wallet record already present in the queue', () => {
  assert.equal(typeof transportModule?.findMissingSyncExpenses, 'function',
    'wallet sync transport must expose findMissingSyncExpenses');

  const expenses = [{ id: 'expense-pending', syncStatus: 'pending' }];
  const queue = [{ expenseId: 'expense-pending' }];

  assert.deepEqual(transportModule.findMissingSyncExpenses(expenses, queue), []);
  assert.equal(transportModule.countOutstandingSyncRecords(expenses, queue), 1);
});

test('exposes reconciliation helpers on the browser transport instance', () => {
  const transport = transportModule.createTransport({
    navigatorRef: {},
    fetchRef: async () => {},
    verifyStatus: async () => false,
    wait: async () => {}
  });

  assert.equal(typeof transport.findMissingSyncExpenses, 'function');
  assert.equal(typeof transport.countOutstandingSyncRecords, 'function');
});
