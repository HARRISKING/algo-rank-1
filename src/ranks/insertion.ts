import { insertPosition } from "../utils";
import { ITargetInfo } from "../interface";
// 源数据
const dataSource: number[] = [4, 7, 29, 1, 3, 23, 25, 26, 43, 55, 2];
const insertion = (data: number[]) => {
  // 防止污染源数据，进行深拷贝
  let copyArr: number[] = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < copyArr.length; i++) {
    let targetInfo: ITargetInfo = { value: copyArr[i], index: i };
    for (let j = i - 1; j >= 0; j--) {
      if (targetInfo["value"] < copyArr[j]) {
        copyArr = insertPosition(targetInfo["index"], j, copyArr);
        targetInfo["index"] = j;
        targetInfo["value"] = copyArr[j];
        continue;
      }
    }
  }
  return copyArr;
};
insertion(dataSource);
