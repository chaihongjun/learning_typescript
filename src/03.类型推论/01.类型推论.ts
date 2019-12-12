/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 11:11:16
 * @LastEditTime: 2019-12-12 11:23:12
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
// 声明并赋值变量的时候，如果没有明确指定变量类型，那么typescript会做推断出类型

// 这里 gender 根据赋值结果 推论为 string 类型
let gender = "男";
// 因为 gender 是string 类型，所以复制 number 类型会报错
gender = 1;

//声明变量的时候没有赋值，也会推论为 any 类型

let anyType;

anyType = 1;
anyType = "one";
anyType = true;
