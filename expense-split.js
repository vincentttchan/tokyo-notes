(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.TokyoExpenseSplit = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function normalizeSplitCount(value) {
    const count = Math.floor(Number(value));
    return Number.isFinite(count) ? Math.min(20, Math.max(1, count)) : 1;
  }

  function calculateEqualSplit(amount, count) {
    const total = Math.max(0, Number(amount) || 0);
    const people = normalizeSplitCount(count);
    const perPerson = total / people;
    return {
      amount: total,
      count: people,
      perPerson,
      payerShare: perPerson,
      reimbursement: Math.max(0, total - perPerson)
    };
  }

  return { normalizeSplitCount, calculateEqualSplit };
});
