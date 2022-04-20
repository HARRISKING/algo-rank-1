// 源数据
const dataSource: number[] = [4, 7, 29, 1, 3, 23, 25, 26, 43, 55, 2];
const recursion = (data: number[]): number[] => {
  // 防止污染源数据，进行深拷贝
  let copyArr: number[] = JSON.parse(JSON.stringify(data));
  return handleSplit(copyArr);
};
// 分隔递归
const handleSplit = (targetList: number[]) => {
  if (targetList.length < 2) return targetList;
  const halfLength: number = Math.ceil(targetList.length / 2);
  let leftList = targetList.slice(0, halfLength);
  let rightList = targetList.slice(halfLength);
  return handleRecursion(handleSplit(leftList), handleSplit(rightList));
};
// 排序处理函数
const handleRecursion = (leftList: number[], rightList: number[]) => {
  let result: number[] = [];
  while (leftList.length && rightList.length) {
    if (leftList[0] <= rightList[0]) {
      result.push(leftList.shift());
    } else {
      result.push(rightList.shift());
    }
  }
  while (leftList.length) {
    result.push(leftList.shift());
  }
  while (rightList.length) {
    result.push(rightList.shift());
  }
  return result;
};
let a = recursion(dataSource);
