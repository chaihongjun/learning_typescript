/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-16 10:40:43
 * @LastEditTime: 2019-12-16 16:51:49
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

/*
type assertion

类型断言，手动指定一个值的类型：

语法
<类型>值
或
值 as 类型
*/

// 一个例子
// 返回一个参数（数字/字符串）的长度

// number类型没有 length属性
function getLength(something: string | number): number {
  return something.length;
}

function getLengthVerOne(something: string | number): number {
  //如果是字符串

  //访问联合类型的时候 number 没有length 属性
  //联合类型必须是共有属性，所以这里通不过编译

  if (something.length) {
    return something.length;
  }
  //如果不是字符串则
  else {
    return something.toString().length;
  }
}

//改进版 使用断言
// 断言不是类型强制转换，而是一种类型的假设

function getLengthVerTwo(something: string | number): number {
  // 看起来像是强制的类型转换，
  // 但是这里应该理解成假设当前变量的类型

  if ((<string>something).length) {
    return (<string>something).length;
  }
  //如果不是字符串则
  else {
    return something.toString().length;
  }
}
