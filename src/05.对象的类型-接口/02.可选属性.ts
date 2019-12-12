/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 14:32:58
 * @LastEditTime: 2019-12-12 15:07:01
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  接口里面的属性后面跟一个问号？，表示式可选项
*/

// 定义接口 Person
// gender 是可选项
interface People {
  name: string;
  gender?: string;
}

//实现接口
let yours: People = {
  name: "chj",
  gender: "男"
};

//实现接口  可选项不加
let someone: People = {
  name: "jerry"
};

/* 不允许添加未定义的属性  */
//报错 因为 age 不在接口内定义
//Object literal may only specify known properties,
//and 'age' does not exist in type 'People'.
let anotherOne: People = {
  name: "tom",
  gender: "女",
  age: 18
};
