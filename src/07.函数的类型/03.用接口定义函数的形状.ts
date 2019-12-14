/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 14:53:20
 * @LastEditTime: 2019-12-14 15:12:56
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

/*
  接口除了 可以对 对象和数组进行形状描述
  也可以对 函数形状进行描述
*/

interface SearchFunc {
  // （）括号内是函数的参数输入形状描述
  // 最后一个：冒号是函数输出形状描述
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};
