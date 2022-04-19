import { IMinInfo } from "../interface";
// 换位置处理函数
export const switchPosition = (
  minInfo: IMinInfo,
  targetIndex: number,
  targetList: number[]
): number[] => {
  // 防止污染源数据，进行深拷贝
  const copyArr = JSON.parse(JSON.stringify(targetList));
  const temp = copyArr[targetIndex];
  copyArr[targetIndex] = copyArr[minInfo.index];
  copyArr[minInfo.index] = temp;
  return copyArr;
};
