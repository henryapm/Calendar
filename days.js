const daysOfTheWeek = {
  Sun: 'S',
  Mon: 'M',
  Tue: 'T',
  Wed: 'W',
  Thu: 'T',
  Fri: 'F',
  Sat: 'S'
}

const indexOfTheWeek = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}
const nextMonth = document.querySelector('.nextMonth');
const prevMonth = document.querySelector('.prevMonth');
const monthYear = document.querySelector('.month-year');
let daysOfTheWeekAndDays = document.querySelector('.daysOfTheWeekAndDays')
let daysOfTheWeekEl = document.querySelector('.days-of-the-week');
let days = document.querySelector('.days');
let monthsEl = document.querySelector('.months')



const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const day = date.getDate();
let updatedArguments = [];
let modYear;
let modMonth;
function hideAndShow(hide, show) {
  hide.classList.remove('show');
  show.classList.add('show');
}

function selectMonth(year, selectedMonth) {
  let dateSelected = new Date(year, selectedMonth);
  let dateLastDayMonth = new Date(year, selectedMonth + 1, 0);
  let dateLastDayPrevMonth = new Date(year, selectedMonth, 0);

  const monthInLetters = dateSelected.toLocaleDateString('locale', { month: 'short'});
  // First day of the month in the weekdays
  let firstDayOfTheMonth = dateSelected.toLocaleDateString('locale', { weekday: 'short' });
  // Last day of the selected month
  let lastDayMonth = dateLastDayMonth.getDate();
  // Last day of the previous month
  let lastDayOfThePrevMonth = dateLastDayPrevMonth.getDate();
  // Tell the month what month was selected
  month = selectedMonth;
  fillCalendar(firstDayOfTheMonth, lastDayOfThePrevMonth, lastDayMonth, monthInLetters, year);
}

function fillCalendar(firstDayOfTheMonth, lastDayOfThePrevMonth, lastDayOfTheMonth, monthLetters, year) {
  days.innerHTML= '';
  hideAndShow(monthsEl ,daysOfTheWeekAndDays);
  // startDay= the number of position of the first row to see where to start the loop
  let startDay = indexOfTheWeek[firstDayOfTheMonth];
  
  // prevMonthDays is equal to the lastday of the prev month minus the spaces that we have left from startDay,
  // That was calculated like that to show only the days from the previous month that fit on the spaces left
  let prevMonthDays = lastDayOfThePrevMonth - (startDay -1);
  for (let i = 1; i <= startDay; i++) {
    days.innerHTML += `
    <span class="otherMonthDays">${prevMonthDays}</span>
    `;
    // if they days aren't all printed, add a day to keep printing
    prevMonthDays < lastDayOfThePrevMonth && prevMonthDays++;
  }

  // Print the days of the Selected Month
  for (let i = 1; i <= lastDayOfTheMonth; i++) {
    days.innerHTML += `
    <span>${i}</span>
    `;
  }

  // To print the days of the following month
  let spans = document.querySelectorAll('.days span');
  for (let i = 1; ((spans.length % 7) !== 0); i++) {
    days.innerHTML += `
    <span class="otherMonthDays">${i}</span>
    `;
    spans = document.querySelectorAll('.days span');
  }
  monthYear.textContent = `${monthLetters} ${year}`;
}




function findAndsetday(day) {
  for (let i = 0; i < days.length; i++) {
    days[i].classList.remove('selected');
    if (parseInt(days[i].textContent) === day) {
      days[i].classList.add('selected');
    }
  }
}
function seeNextMonth() {
  if (daysOfTheWeekAndDays.classList.contains('show')) {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    selectMonth(year, month);
  } else if (monthsEl.classList.contains('show')) {
    year += 1;
    showMonths();
  }
  
}

function seePrevMonth() {
  if (daysOfTheWeekAndDays.classList.contains('show')) {
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    selectMonth(year, month);
  } else if (monthsEl.classList.contains('show')) {
    year -= 1;
    showMonths();
  }
}
selectMonth(year, month);
// findAndsetday(day);

prevMonth.addEventListener('click', seePrevMonth)
nextMonth.addEventListener('click', seeNextMonth)