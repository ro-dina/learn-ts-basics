export {};
import { date2str } from "./utils/date2str"; // 関数date2strをインポート

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

let str = `期限 ${date2str(deadline)} (登録日 ${date2str(cratedAt)})`;
console.log(str);