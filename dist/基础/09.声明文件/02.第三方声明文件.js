"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-17 11:10:42
 * @LastEditTime: 2019-12-17 11:28:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
    推荐使用@types 统一管理第三方库的声明文件

    比如 jquery
    npm install @types/jquery --save-dev

*/
/*
  当第三方库没有提供声明文件时，需要自己写声明文件

  第三方库的使用场景:

  ​全局变量：通过 <script> 标签引入第三方库，注入全局变量

 ​npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范

 ​UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入

 ​直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构

 ​在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构

 ​模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构


*/
