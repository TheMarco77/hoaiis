const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const daysPerWeek = 7;
const weeksPerYear = 52;
const myAge = 42;

// const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
const secondsAlive = secsPerMin * minsPerHour * hoursPerDay * daysPerWeek * weeksPerYear * myAge;

console.log(`I've been alive for more than ${secondsAlive} seconds.`);