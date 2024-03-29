const now = new Date();

console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'do'));
console.log(dateFns.format(now, 'dddd do MMMM YYYY'));

// comparing dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, { addSuffix: true }));
