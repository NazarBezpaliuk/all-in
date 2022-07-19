(() => {
  const refs = {
    openCoffeBtn: document.querySelector('[data-coffe-open]'),
    closeCoffeBtn: document.querySelector('[data-coffe-close]'),
    coffe: document.querySelector('[data-coffe]'),
    body: document.querySelector('body'),
  };

  refs.openCoffeBtn.addEventListener('click', toggleCoffe);
  refs.closeCoffeBtn.addEventListener('click', toggleCoffe);

  function toggleCoffe() {
    refs.coffe.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();
