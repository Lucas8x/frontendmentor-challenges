const adviceNumber = document.getElementById('adviceNumber');
const adviceText = document.getElementById('adviceText');
const generateAdviceBtn = document.getElementById('diceButton');

generateAdviceBtn.addEventListener('click', fetchAdvice);

const API_URL = 'https://api.adviceslip.com/advice';
let isFetching = false;

async function fetchAdvice() {
  if (isFetching) return;

  try {
    isFetching = true;
    generateAdviceBtn.dataset.fetching = true;

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'lucas8x/advice-generator-app-main',
      },
    });
    const data = JSON.parse(await response.text());

    adviceNumber.innerText = `ADVICE #${String(data.slip.id).padStart(3, '0')}`;

    adviceText.innerText = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
  } finally {
    generateAdviceBtn.dataset.fetching = false;
    isFetching = false;
  }
}

fetchAdvice();
