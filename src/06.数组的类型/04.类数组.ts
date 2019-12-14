/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 11:19:47
 * @LastEditTime: 2019-12-14 13:44:50
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
Array-like Object 类数组不是真正的数组类型，比如
函数的参数 arguments

*/

// arguments 不是真正的数组类型 报错

//  error TS2740: Type 'IArguments' is missing the following properties from type 'number[]':
// pop, push, concat, join, and 15 more.
function sum() {
  let args: number[] = arguments;
}

//使用接口

interface likeArray {
  [index: number]: number;
  length: number;
  callee: Function;
}

function otherSum() {
  let arg: likeArray = arguments;
}

// 常用的类数组都已经有内置的定义好的接口，
//IArguments
// NodeList
// HTMLCollection
