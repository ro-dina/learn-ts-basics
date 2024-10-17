export {};
import { Todo } from "../types";
import { initTodos } from "./initTodos";
import dayjs from "dayjs";

const dtFmt = "YYYY/MM/DD HH:mm";
const formattedTodos: string[] = initTodos.map((t: Todo) => {
  const str =
    `<li>[${t.id}] ${t.name} 優先度${t.priority} ` +
    `(期限${dayjs(t.deadline).format(dtFmt)})` +
    (t.isDone ? "【済】" : "") +
    "</li>";
  return str;
});

console.log(formattedTodos);