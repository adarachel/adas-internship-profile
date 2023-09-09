const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  currentDay;

const currentUTCTime = Date.now();
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  currentUTCTime;
