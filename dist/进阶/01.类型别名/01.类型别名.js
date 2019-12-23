"use strict";
/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-20 16:29:19
 * @LastEditTime : 2019-12-20 18:01:02
 * @LastEditors  : ChaiHongJun
 * @Description: 头部文件注释
 */
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
