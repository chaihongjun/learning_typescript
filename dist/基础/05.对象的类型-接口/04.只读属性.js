"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 09:33:04
 * @LastEditTime: 2019-12-14 10:02:28
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*


只读属性使用 readonly 定义，并且在对象初始化之后无法再改变


只读的约束存在于第一次给对象赋值的时候，
而不是第一次给只读属性赋值的时候

*/
var card = {
    id: 89757,
    name: "JJ",
    gender: "male"
};
//报错
//  Cannot assign to 'id' because it is a read-only property.
// 初始化的时候已经完成赋值，无法再次改变
card.id = 9527;
// 报错 只读属性 id 缺失
//  Property 'id' is missing in
//  type '{ name: string; gender: string; }'
//   but required in type 'idCard'.
var anotherCard = {
    name: "Tom",
    gender: "male"
};
//对象完成初始化之后无法再次修改只读属性
anotherCard.id = 1;
