(() => {
  const refs = {
    openInfoBtn: document.querySelector('[data-info-open]'),
    closeInfoBtn: document.querySelector('[data-info-close]'),
    info: document.querySelector('[data-info]'),
    body: document.querySelector('body'),
  };

  refs.openInfoBtn.addEventListener('click', toggleInfo);
  refs.closeInfoBtn.addEventListener('click', toggleInfo);

  function toggleInfo() {
    refs.info.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();
