export {};
const numArr: number[] = [1, 2, 3, 4, 5, 6];
const oddArr: number[] = numArr.filter((num) => {
  return num % 2 === 1; // 奇数か? ture or false
});
console.log(`numArr = ${numArr}`);
console.log(`oddArr = ${oddArr}`);