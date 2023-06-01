function showMonths() {
  monthsEl.innerHTML= '';
  hideAndShow(daysOfTheWeekAndDays, monthsEl);
  Object.entries(months).forEach(month => {
    monthsEl.innerHTML += `
    <span 
      data-month="${month[0]}" 
      data-year="${year}" 
      onclick="selectMonth(${year}, ${month[0]})">
        ${month[1]}
    </span>
    `;
  })
  monthYear.textContent = year;
}
// Declared at days.js
monthYear.addEventListener('click', showMonths);

