"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 15:48:53
 * @LastEditTime: 2019-12-14 16:07:58
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*

ES6 中的rest 参数可以获取参数列表中的剩余参数，

rest 实际就是一个数组

并且rest 参数是 参数列表中最后一个参数


function push(array, ...rest) {
  rest.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);


*/
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var a = [];
push(a, 1, 2, 3);
