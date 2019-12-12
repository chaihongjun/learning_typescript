"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 14:59:39
 * @LastEditTime: 2019-12-12 17:13:27
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
接口里面的任意属性使用

[属性名:string / number ]:any / number / string / boolean 等等
定义
1. 任意属性索引签名必须是 string 或 number 类型 （ An index signature parameter type must be either 'string' or 'number'.）
2. 任意属性的类型必须包含接口已经存在的确定属性和可选属性类型
*/
var human = {
    name: "JayChou"
};
var man = {
    name: "Quinlivan",
    1: 1
};
