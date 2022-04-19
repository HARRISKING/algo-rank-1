// 源数据
const dataSource: number[] = [4, 7, 29, 1, 3, 23, 25, 26, 43, 55, 2];
// 冒泡算法
const bubble = (data: number[]) => {
  // 防止污染源数据，进行深拷贝
  let copyArr: number[] = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr.length - i; j++) {
      const leftItem: number = copyArr[j],
        rightItem: number = copyArr[j + 1];
      if (leftItem > rightItem) {
        copyArr = switchPosition(j, copyArr);
      }
    }
  }
};
// 换位置处理函数
const switchPosition = (index: number, targetList: number[]): number[] => {
  const copyArr = JSON.parse(JSON.stringify(targetList));
  const temp = copyArr[index];
  copyArr[index] = copyArr[index + 1];
  copyArr[index + 1] = temp;
  return copyArr;
};
bubble(dataSource);
