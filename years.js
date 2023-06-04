const controls = document.querySelector('.month-year-controls');
let isThereAYear = false;
function showYears() {
  monthYear.textContent = `
    ${year} - ${year + 11}
  `;
  yearsEl.innerHTML = '';
  // Print the years of the Selected years
  for (let i = year; i <= (year + 11); i++) {
    yearsEl.innerHTML += `
    <span 
    data-year="${i}"
    onclick="showMonths(${i})">${i}</span>
    `;
  }
  isThereAYear = true;
  hideAndShow(monthsEl, yearsEl)
  findAndSetYear()
}

function findAndSetYear() {
  yearElements = Array.from(document.querySelectorAll('.years span'));
  const currentYearEl = yearElements.find(year => parseInt(year.dataset.year) === currentYear);
// if the currentYearEl Exist and is equal to currentYear it gets selected
  if (currentYearEl && parseInt(currentYearEl.textContent) === currentYear) {
    currentYearEl.classList.add('selected');
  }
}