const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeSplitCount, calculateEqualSplit } = require('../expense-split.js');

test('splits an expense equally and includes the payer', () => {
  const result = calculateEqualSplit(10000, 5);
  assert.equal(result.count, 5);
  assert.equal(result.perPerson, 2000);
  assert.equal(result.reimbursement, 8000);
});

test('keeps fractional JPY visible instead of losing money', () => {
  const result = calculateEqualSplit(1000, 3);
  assert.equal(result.perPerson.toFixed(2), '333.33');
  assert.equal(result.reimbursement.toFixed(2), '666.67');
});

test('normalizes invalid participant counts', () => {
  assert.equal(normalizeSplitCount(0), 1);
  assert.equal(normalizeSplitCount('4'), 4);
  assert.equal(normalizeSplitCount(99), 20);
});
