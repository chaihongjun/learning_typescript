"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 16:08:31
 * @LastEditTime: 2019-12-16 11:23:20
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
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
