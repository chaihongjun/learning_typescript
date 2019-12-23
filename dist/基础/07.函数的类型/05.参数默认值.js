"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 15:30:37
 * @LastEditTime: 2019-12-14 16:04:55
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  ES6中可以函数的参数添加默认值，
  typescript 将带默认值的参数当作可选参数

  带有默认值的参数的位置则不受限制

*/
function gainFullName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Cat"; }
    return firstName + " " + lastName;
}
var tomCat = gainFullName("Tom", "Cat");
var Tom = gainFullName("Tom");
// 有默认值的参数 位置可以随意
function buildFullName(firstName, lastName) {
    if (firstName === void 0) { firstName = "cat "; }
    return firstName + " " + lastName;
}
var TomCat = buildFullName("Tom", "Cat");
var Cat = buildFullName(undefined, "Tom");
