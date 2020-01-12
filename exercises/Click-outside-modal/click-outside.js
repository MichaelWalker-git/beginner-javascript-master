const cardButtons = document.querySelectorAll(' .card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(' .card');
  // grab the image source
  const imgSrc = card.querySelector('img').src;
  console.log(imgSrc);
  const desc = card.dataset.description;
  console.log(desc);
  // Populate the modal with the new info.
  modalInner.innerHTML = `<img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}"/>
  <p>${desc}</p>`;

  // show the modal
  modalOuter.classList.add('open');
}

// for each is a callback function
cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// set escape key to close modal
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
