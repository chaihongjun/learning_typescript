"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 16:08:31
 * @LastEditTime: 2019-12-14 16:27:54
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
*/
function reverse(x) {
    if (typeof x === "number") {
        return Number(x
            .toString()
            .split("")
            .reverse()
            .join(""));
    }
    else if (typeof x === "string") {
        return x
            .split("")
            .reverse()
            .join("");
    }
}
