function calculateHourDifference(date1, date2) {
const diffInMilliseconds = Math.abs(date2 - date1);
const hours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
return hours;
}

// Пример использования функции

const startDate = new Date('2022-08-01T09:00:00');
const endDate = new Date('2022-08-01T14:30:00');

const hourDifference = calculateHourDifference(startDate, endDate);
console.log(hourDifference); // Вывод: 5.5