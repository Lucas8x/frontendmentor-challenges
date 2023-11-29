const dayInput = document.getElementById('day'),
  monthInput = document.getElementById('month'),
  yearInput = document.getElementById('year'),
  yearsResult = document.getElementById('yearsResult'),
  monthsResult = document.getElementById('monthsResult'),
  daysResult = document.getElementById('daysResult'),
  dayError = document.getElementById('dayError'),
  monthError = document.getElementById('monthError'),
  yearError = document.getElementById('yearError'),
  submitIcon = document.getElementById('submitIcon');

function calculateLifetime() {
  const today = new Date();

  // YEAR
  const year = yearInput.value;
  const isPast = Number(year) < today.getFullYear();
  const isValidYear = isPast && year.length === 4;
  const yearsDiff = today.getFullYear() - year;

  yearsResult.innerText = isValidYear ? yearsDiff : '--';
  yearInput.dataset.invalid = !isValidYear;

  if (year && !isValidYear) yearError.innerText = 'Must be in the past';
  if (!year) yearError.innerText = 'This field is required';

  // MONTH
  const month = monthInput.value;
  const isValidMonth = month.length === 2 && month >= 1 && month <= 12;
  const monthsDiff = today.getMonth() + 1 - month;

  monthsResult.innerText = isValidMonth ? monthsDiff : '--';
  monthInput.dataset.invalid = !isValidMonth;

  if (month && !isValidMonth) monthError.innerText = 'Must be a valid month';
  if (!month) monthError.innerText = 'This field is required';

  // DAYS
  const day = dayInput.value;
  const isValidDay = day.length === 2 && day >= 1 && day <= 31;

  let daysDiff = today.getDate() - day;
  if (daysDiff < 0) {
    monthsResult.innerText = monthsDiff - 1;
    daysDiff += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  daysResult.innerText = isValidDay ? daysDiff : '--';
  dayInput.dataset.invalid = !isValidDay;

  if (day && !isValidDay) dayError.innerText = 'Must be a valid day';
  if (!day) dayError.innerText = 'This field is required';
}

function focusNext(currentInput, minCurrentValueLength, nextInput) {
  if (currentInput.value.length === minCurrentValueLength && !nextInput.value) {
    nextInput.focus();
  }
}

dayInput.addEventListener('keyup', () => {
  focusNext(dayInput, 2, monthInput);
});

dayInput.addEventListener('blur', () => {
  if (dayInput.value.length === 1) {
    dayInput.value = String(dayInput.value).padStart(2, '0');
  }
});

monthInput.addEventListener('keyup', () => {
  focusNext(monthInput, 2, yearInput);
});

monthInput.addEventListener('blur', () => {
  if (monthInput.value.length === 1) {
    monthInput.value = String(monthInput.value).padStart(2, '0');
  }
});

yearInput.addEventListener('keyup', () => {
  focusNext(yearInput, 4, dayInput);
});

submitIcon.addEventListener('click', calculateLifetime);
