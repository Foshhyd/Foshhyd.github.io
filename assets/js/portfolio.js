/* Progressive image previews; image links still work without JavaScript. */
(function () {
  'use strict';
  var dialog = document.getElementById('project-lightbox');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  var preview = dialog.querySelector('img');
  document.querySelectorAll('a[data-lightbox]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      preview.src = link.href;
      preview.alt = link.querySelector('img').alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    if (event.target !== dialog) return;
    var rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
}());
