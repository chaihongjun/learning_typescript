/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 13:54:58
 * @LastEditTime: 2019-12-14 14:52:43
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

/*

  表达式方式的函数声明
  要求表达式两边都要做约束
  左侧的变量需要做约束 :(参数约束)=>函数结果类型
  右侧也一样需要做约束

  let 变量名:(参数1:类型,参数2:类型 ...) => 函数返回值类型 = function (参数1:类型,参数2:类型 ...)：函数返回值类型{

      函数体

  }
*/

let Summation: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
