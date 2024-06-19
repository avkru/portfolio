const currentDate = document.querySelector('.date');

const date = new Date();

const day = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Суб'];

const month = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

currentDate.innerHTML = `${day[date.getDay()]}, ${date.getDate()}.${
  month[date.getMonth()]
}.${date.getFullYear()} г.`;
