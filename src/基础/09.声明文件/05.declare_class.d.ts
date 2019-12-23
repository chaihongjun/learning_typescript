/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-17 15:32:37
 * @LastEditTime: 2019-12-17 15:58:01
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
// 正常定义一个类，类的实现不能具体定义
declare class Animal {
  name: string;
  constructor(name: string);
  sayHi(): string;
}

// 报错
//error TS1183:
// An implementation cannot be declared in ambient contexts.
//  不能在声明部分实现函数的具体实现
declare class Plant {
  name: string;
  constructor(name: string);
  sayHi() {
    return "${this.name}";
  }
}
