export {};
const dayjs = require('dayjs');

const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const createdAt: Date = new Date();

const dayjsdeadDate = dayjs(deadline);
const dayjscreatDate = dayjs(createdAt);

const deadweekdaysJP = weekdays[dayjsdeadDate.day()];
const creatweekdaysJP = weekdays[dayjscreatDate.day()];

const dtFmtd = dayjsdeadDate.format("YYYY/MM/DD");
const tiFmtd = dayjsdeadDate.format("HH:mm")

const dtFmt = dayjscreatDate.format("YYYY/MM/DD");
const tiFmt = dayjscreatDate.format("HH:mm")


const str =
  `期限 ${dayjs(deadline).format(dtFmtd)}(${deadweekdaysJP}) ${tiFmtd}` +
  `(登録日 ${dayjs(createdAt).format(dtFmt)}(${creatweekdaysJP}) ${tiFmt})`;
console.log(str);