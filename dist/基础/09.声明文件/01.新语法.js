"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-16 17:18:26
 * @LastEditTime: 2019-12-17 16:12:56
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  在需要使用第三方的库的时候，比如JQuery,需要引用它的声明文件，
  才能获得代码补全，代码提示等功能

*/
/*
声明文件涉及的新语法

declare var 声明全局变量

 ​declare function 声明全局方法

 ​declare class 声明全局类

 ​declare enum 声明全局枚举类型

 ​declare namespace 声明（含有子属性的）全局对象

 ​interface 和 type 声明全局类型

 ​export 导出变量

 ​export namespace 导出（含有子属性的）对象

 ​export default ES6 默认导出

 ​export = commonjs 导出模块

 ​export as namespace UMD 库声明全局变量

 ​declare global 扩展全局变量

 ​declare module 扩展模块

 ​/// <reference /> 三斜线指令

*/
// 在TS中使用Jquey这类第三方的库需要引入它的声明文件
// 直接使用报错
//$("#foo");
//需要定义一下这个变量是什么类型
// 声明变量可以使用  var let const
// declare var 和 declare let 没有区别
//declare var JQuery: (selector: string) => any;
//declare let JQ: (selector: string) => any;
//然后再使用
//JQuery("#foo");
/*
  通常我们把声明语句单独放在一个*.d.ts文件内

  // src/JQuery.d.ts
  declare var jQuery: (selector: string) => any;

  然后就可以直接在ts文件中引用

  // src/index.ts
  jQuery('#foo');

  如果添加的第三方声明变量无法使用，请检查 tsconfig.json 配置
  文件


*/
// 使用了声明变量
//jquery("#foo");
/*
    使用 declare const 声明的变量，表示这个变量是一个全局常量，后续不能再修复
*/
//jQuery("#foo");
//报错
// Cannot assign to 'jQuery' because it
//is a constant.
// jQuery = function(selector) {
//   return document.querySelector(selector);
// };
