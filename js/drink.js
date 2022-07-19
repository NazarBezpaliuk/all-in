(() => {
  const refs = {
    openDrinkBtn: document.querySelector('[data-drink-open]'),
    closeDrinkBtn: document.querySelector('[data-drink-close]'),
    drink: document.querySelector('[data-drink]'),
    body: document.querySelector('body'),
  };

  refs.openDrinkBtn.addEventListener('click', toggleDrink);
  refs.closeDrinkBtn.addEventListener('click', toggleDrink);

  function toggleDrink() {
    refs.drink.classList.toggle('is-hidden-mob');
    refs.body.classList.toggle('no-scroll');
  }
})();
