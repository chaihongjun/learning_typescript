"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 11:47:29
 * @LastEditTime: 2019-12-14 13:45:27
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*


  在JavaSCript 中函数声明有两种常见方式

  // 函数声明
function sum(x, y) {
  return x + y;
}

//表达式
let func = function(x, y) {
  return x + y;
};


*/
// typescript 中要约束传入参数和函数返回值的类型
//约束了传入参数的类型，个数以及函数返回值的类型
function sum(x, y) {
    return x + y;
}
// 报错
// error TS2554: Expected 0-2 arguments, but got 3
sum(1, 2, 3);
