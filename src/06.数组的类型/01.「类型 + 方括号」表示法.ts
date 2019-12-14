/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 10:05:07
 * @LastEditTime: 2019-12-14 10:13:22
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
 typescript 中数组简单哦表示方法
 类型[]
*/

let fibonacci: number[] = [1, 1, 2, 3, 5];

// 依据声明的数组类型

//数组内不能出现其他类型数组元素
// error TS2322: Type 'string' is
// not assignable to type 'number'.
let pureNum: number[] = [1, "1", 2, 3, 5];

//数组的方法也依据数组类型而被限制
let anotherPureNum: number[] = [1, 1, 2, 3, 5];
// error TS2345: Argument of type
//'"8"' is not assignable to parameter of type 'number'.
anotherPureNum.push("8");
