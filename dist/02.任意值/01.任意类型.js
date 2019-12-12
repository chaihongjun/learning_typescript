"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 10:44:14
 * @LastEditTime: 2019-12-12 10:48:24
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
    用any表示允许赋值任意类型
*/
// 普通类型在赋值过程后是不允许改变类型的
var myFavoriteNumber = "seven";
myFavoriteNumber = 7;
/*
  error TS2322: Type '7' is not assignable to type 'string'.
*/
//如果是any类型，可以允许赋值任意类型
var myAnotherFavoriteNumber = "seven";
myAnotherFavoriteNumber = 7;
