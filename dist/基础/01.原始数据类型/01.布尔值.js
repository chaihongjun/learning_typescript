"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-09 14:09:51
 * @LastEditTime: 2019-12-12 09:11:18
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
// 在typescript中，使用`boolean`定义布尔值类型
var isDone = false;
//使用构造函数Boolean创造的对象不是布尔值
// 这里编译会报错
var createdByNewBoolean = new Boolean();
/*
Type 'Boolean' is not assignable to type 'boolean'.
类型“Boolean”不能分配给类型“Boolean”

'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
“boolean”是一个原始类似，但“boolean”是一个包装对象。尽可能使用“布尔值”。
*/
// 事实上 new Boolean() 返回的是一个 Boolean 对象
var createdByAnotherBoolean = new Boolean(1);
// 直接调用 Boolean 也可以返回一个 boolean 类型：
var createdByBoolean = Boolean(1);
