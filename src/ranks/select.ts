import { switchPosition } from "../utils";
import { IMinInfo } from "../interface";

// 源数据
const dataSource: number[] = [4, 7, 29, 1, 3, 23, 25, 26, 43, 55, 2];
const select = (data: number[]) => {
  // 防止污染源数据，进行深拷贝
  let copyArr: number[] = JSON.parse(JSON.stringify(data));
  for (let i = 0; i < copyArr.length; i++) {
    let minInfo: IMinInfo = { value: copyArr[i], index: i };
    for (let j = i; j < copyArr.length; j++) {
      if (minInfo["value"] > copyArr[j]) {
        minInfo["value"] = copyArr[j];
        minInfo["index"] = j;
      }
    }
    copyArr = switchPosition(minInfo, i, copyArr);
    return copyArr;
  }
};

select(dataSource);
