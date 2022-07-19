(() => {
  const refs = {
    openHookahBtn: document.querySelector('[data-hookah-open]'),
    closeHookahBtn: document.querySelector('[data-hookah-close]'),
    hookah: document.querySelector('[data-hookah]'),
    body: document.querySelector('body'),
  };

  refs.openHookahBtn.addEventListener('click', toggleHookah);
  refs.closeHookahBtn.addEventListener('click', toggleHookah);

  function toggleHookah() {
    refs.hookah.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();
