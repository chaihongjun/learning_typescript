/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-14 15:13:34
 * @LastEditTime: 2019-12-14 15:27:26
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */

/*
  typescript 中的可选参数也是使用？问号表示

*/

// 这里的lastname 是一个可选参数

function getFullName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let tomcat = getFullName("Tom", "Cat");
let tom = getFullName("Tom");

// 可选参数必须在必须参数的后面
// error TS1016: A required parameter cannot follow an optional parameter.
function fullName(firstName: string, lastName?: string, aka: string) {
  if (lastName) {
    return firstName + " " + lastName + "And aka " + aka;
  } else {
    return firstName + "And aka " + aka;
  }
}
let cat = fullName("Tom", "Cat", "猫");
let catTom = fullName("Tom", undefined, "猫");
