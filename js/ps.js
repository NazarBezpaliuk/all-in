(() => {
  const refs = {
    openPsBtn: document.querySelector('[data-ps-open]'),
    closePsBtn: document.querySelector('[data-ps-close]'),
    ps: document.querySelector('[data-ps]'),
    body: document.querySelector('body'),
  };

  refs.openPsBtn.addEventListener('click', togglePs);
  refs.closePsBtn.addEventListener('click', togglePs);

  function togglePs() {
    refs.ps.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();
