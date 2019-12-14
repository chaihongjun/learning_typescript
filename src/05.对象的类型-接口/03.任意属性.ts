/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 14:59:39
 * @LastEditTime: 2019-12-14 10:37:16
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
接口里面的任意属性使用

[属性名:string / number ]:any / number / string / boolean 等等
定义 
1. 任意属性索引签名必须是 string 或 number 类型 （ An index signature parameter type must be either 'string' or 'number'.）
2. 任意属性的类型必须包含接口已经存在的确定属性和可选属性类型
*/

// 接口的属性类型索引必须是number 或者  string
interface Human {
  name: string;
  [properName: string]: any;
}

let human: Human = {
  name: "JayChou"
};

interface Man {
  name: string;
  [properName: string]: any; //这里指定任意类型属性类型是 string
}

let man: Human = {
  name: "ROMEO",
  1: 1 //这里没报错是因为，数字类型的属性索引会被JS转换成字符串类型
};

interface Woman {
  name: number;
  [properName: number]: string;
}

let woman: Woman = {
  name: 1,
  1: "Hannah"
};
