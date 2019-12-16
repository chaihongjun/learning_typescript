"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-16 17:18:26
 * @LastEditTime: 2019-12-16 18:03:41
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  在需要使用第三方的库的时候，比如JQuery,需要引用它的声明文件，
  才能获得代码补全，代码提示等功能

*/
// 在TS中使用Jquey这类第三方的库需要引入它的声明文件
// 直接使用报错
$("#foo");
//然后再使用
JQuery("#foo");
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
jquery("#foo");
/*
    使用 declare const 声明的变量，表示这个变量是一个全局常量，后续不能再修复
*/
jQuery("#foo");
//报错
// Cannot assign to 'jQuery' because it
//is a constant.
jQuery = function (selector) {
    return document.querySelector(selector);
};
