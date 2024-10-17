export {};
import { Todo } from "../types";
import { initTodos } from "../daisankai/initTodos";

const targetId = 3;
const newName = "電気電子回路1の課題";
const updatedTodos: Todo[] = [];

console.log(JSON.stringify(updatedTodos, null, 2));