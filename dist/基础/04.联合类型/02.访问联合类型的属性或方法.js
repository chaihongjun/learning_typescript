"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 11:41:00
 * @LastEditTime: 2019-12-12 14:10:00
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*

只能访问此联合类型的所有类型里共有的属性或方法

*/
// length 不是 string 和  number 共有的属性 报错
//error TS2339: Property 'length'
//does not exist on type 'string | number'.
//Property 'length' does not exist on type 'number'.
function getLength(something) {
    return something.length;
}
// string 和  number 都有 toString() 方法 不报错
function getString(something) {
    return something.toString();
}
//联合类型变量再被赋值之后会推断新的类型
var strOrNum;
strOrNum = "chj";
console.log(strOrNum.length);
strOrNum = 10;
// 此时  strOrNum 推断类型是 number 没有length 属性
console.log(strOrNum.length);
