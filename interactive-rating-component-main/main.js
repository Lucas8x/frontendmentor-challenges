let currentRating = undefined;
let submitted = false;

const selectStarStep = document.getElementById('selectStarStep');
const numbersContainer = document.getElementById('numbersContainer');
const numbersButtons = numbersContainer.getElementsByTagName('button');
const submitBtn = document.getElementById('submitBtn');

const thankYouStep = document.getElementById('thankYouStep');
const submittedStarText = document.getElementById('submittedStarText');

Array.from(numbersButtons).forEach((b) =>
  b.addEventListener('click', () => handleStarSelect(b.value)),
);

submitBtn.addEventListener('click', handleSubmit);

function handleStarSelect(value) {
  currentRating = value;
  Array.from(numbersButtons).forEach(
    (b) => (b.dataset.selected = b.value === String(value)),
  );
}

function handleSubmit() {
  if (submitted || !currentRating) return;

  submitted = true;
  selectStarStep.dataset.submitted = true;
  thankYouStep.dataset.submitted = true;

  submittedStarText.innerText = `You selected ${currentRating} out of 5`;
}
