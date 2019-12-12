/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 14:10:42
 * @LastEditTime: 2019-12-12 14:32:42
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  typescript的接口 inteface 是对行为的抽象，需要类 classess 实现 implement

  也长用于对象形状的（对象属性个数和类型）描述  

*/

// 定义接口 Person
interface Person {
  name: string;
  age: number;
}

//实现接口
let my: Person = {
  name: "chj",
  age: 30
};

//实现接口,多一个属性 不可以 报错
//   Object literal may only specify known properties,
//   and 'gender' does not exist in type 'Person'.
let you: Person = {
  name: "you",
  age: 30,
  gender: "男"
};

//实现接口,少一个属性 不可以 报错
//  Property 'age' is missing in type '{ name: string; }'
//  but required in type 'Person'.
let them: Person = {
  name: "them"
};

/*  所以对接口的实现要求，对象的属性和接口完全一致 */
