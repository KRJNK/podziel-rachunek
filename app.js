// Podział rachunku z napiwkiem.
(function () {
  'use strict';
  function fmt(n) {
    return (Math.round(n * 100) / 100).toFixed(2).replace('.', ',');
  }
  function render() {
    var kw = +document.getElementById('kw').value || 0;
    var tip = Math.max(0, +document.getElementById('tip').value || 0);
    var os = Math.max(1, Math.floor(+document.getElementById('os').value || 1));
    var razem = kw * (1 + tip / 100);
    var naOs = razem / os;
    document.getElementById('out').textContent = fmt(naOs) + ' zł / osobę';
    document.getElementById('detail').textContent =
      'Razem z napiwkiem: ' + fmt(razem) + ' zł, w tym napiwek ' + fmt(razem - kw) +
      ' zł (' + tip + '%). Gotówką zbierzcie po ' + Math.ceil(naOs) + ' zł.';
  }
  ['kw', 'tip', 'os'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', render);
  });
  render();
})();
