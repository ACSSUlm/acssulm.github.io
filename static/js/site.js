/* ACSSUlm 网站脚本：语言切换、当前栏目高亮、通知过期隐藏、活动筛选、复制按钮、相册大图 */
(function () {
  var root = document.documentElement;
  var LBL = { copy: { zh: '复制', en: 'Copy', de: 'Kopieren' }, copied: { zh: '已复制', en: 'Copied', de: 'Kopiert' } };
  function lang() { return root.dataset.lang || 'zh'; }

  function setLang(l) {
    if (l !== 'en' && l !== 'de') l = 'zh';
    root.dataset.lang = l;
    root.lang = { zh: 'zh-CN', en: 'en', de: 'de' }[l];
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false'); });
    document.querySelectorAll('.copy').forEach(function (b) { b.textContent = LBL.copy[l]; });
    try { localStorage.setItem('acssulm-lang', l); } catch (e) {}
  }
  document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.l); }); });
  setLang(lang());

  // 导航高亮
  var sec = document.body.dataset.section;
  document.querySelectorAll('nav.main a').forEach(function (a) { if (a.dataset.p === sec) a.setAttribute('aria-current', 'page'); });

  // 过期通知自动隐藏（end 日期当天仍显示）
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var shown = 0, notices = document.querySelectorAll('.notice[data-end]');
  notices.forEach(function (n) {
    var end = n.dataset.end ? new Date(n.dataset.end.slice(0, 10) + 'T00:00:00') : null;
    if (end && !isNaN(end) && end < today) n.hidden = true; else shown++;
  });
  var empty = document.getElementById('no-notices');
  if (empty && notices.length && !shown) empty.hidden = false;
  if (empty && !notices.length) empty.hidden = false;

  // 活动筛选
  var filters = document.getElementById('filters');
  if (filters) filters.querySelectorAll('button').forEach(function (b) {
    b.addEventListener('click', function () {
      filters.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      document.querySelectorAll('#event-list .ev-card').forEach(function (c) { c.hidden = !(b.dataset.c === 'all' || c.dataset.cat === b.dataset.c); });
    });
  });

  // 复制按钮
  document.querySelectorAll('.copy').forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.getElementById(b.dataset.t), txt = el.textContent.trim();
      function done() { b.textContent = LBL.copied[lang()]; setTimeout(function () { b.textContent = LBL.copy[lang()]; }, 1500); }
      function fallback() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, fallback); else fallback();
    });
  });

  // 相册大图
  function openBox(src) {
    var d = document.createElement('div'); d.className = 'lightbox';
    d.innerHTML = '<img alt=""><button aria-label="Close">×</button>';
    d.querySelector('img').src = src;
    d.addEventListener('click', function () { d.remove(); });
    document.body.appendChild(d); d.querySelector('button').focus();
  }
  document.querySelectorAll('.gallery button').forEach(function (b) { b.addEventListener('click', function () { openBox(b.dataset.src); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var l = document.querySelector('.lightbox'); if (l) l.remove(); } });
})();
