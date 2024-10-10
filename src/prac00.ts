export {};

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

const dlYear = deadline.getFullYear();
const dlMonth = String(deadline.getMonth() + 1).padStart(2, "0");
const dlDay = String(deadline.getDate()).padStart(2, "0");
const dlHours = String(deadline.getHours()).padStart(2, "0");
const dlMinutes = String(deadline.getMinutes()).padStart(2, "0");

const caYear = cratedAt.getFullYear();
const caMonth = String(cratedAt.getMonth() + 1).padStart(2, "0");
const caDay = String(cratedAt.getDate()).padStart(2, "0");
const caHours = String(cratedAt.getHours()).padStart(2, "0");
const caMinutes = String(cratedAt.getMinutes()).padStart(2, "0");

const str =
  `期限 ${dlYear}/${dlMonth}/${dlDay} ${dlHours}:${dlMinutes} ` +
  `(登録日 ${caYear}/${caMonth}/${caDay} ${caHours}:${caMinutes})`;
console.log(str);