function showMonths(selectedYear) {
  monthsEl.innerHTML= '';
  Object.entries(months).forEach(month => {
    monthsEl.innerHTML += `
    <span 
      data-month="${month[0]}" 
      data-year="${isThereAYear ? selectedYear : year}" 
      onclick="selectMonth(${isThereAYear ? selectedYear : year}, ${month[0]})">
      ${month[1]}
      </span>
      `;
  })
  // isThereAYear is a boolean that is true only if the user went to the years section and selected a year and they want to see the months of the year selected
  if (isThereAYear) {
    year = selectedYear;
    monthYear.textContent = year;
    isThereAYear = false;
    hideAndShow(yearsEl, monthsEl);
  } else {
    // if isThereAYear is false it would mean the user is coming from the days section and we just want to show the months
    monthYear.textContent = year;
    isThereAYear = false;
    hideAndShow(daysOfTheWeekAndDays, monthsEl);
  }
  // We here change the functionality of the botton monthYear to show the years intead of the months
  monthYear.removeEventListener('click', showMonths);
  monthYear.addEventListener('click', showYears);
  findAndSetMonth();
}

function findAndSetMonth() {
  const monthelements = Array.from(document.querySelectorAll('.months span'));
  console.log(monthelements);
  const currentMonthEl = monthelements.find(month => parseInt(month.dataset.month) === currentMonth);

  if (parseInt(currentMonthEl.dataset.year) === currentYear) {
    currentMonthEl.classList.add('selected')
  }
  console.log(currentMonthEl);
}