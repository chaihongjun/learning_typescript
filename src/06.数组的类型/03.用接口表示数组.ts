/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 11:13:20
 * @LastEditTime: 2019-12-14 11:18:47
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  用接口来表述数组
*/

// 元素是number的数组
interface numberArray {
  [index: number]: number;
}

let NumberArray: numberArray = [1, 2, 3];

// 元素是string的数组
interface stringArray {
  [index: number]: string;
}

let StringArray: stringArray = ["1", "3", "5"];
