/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 09:10:49
 * @LastEditTime: 2019-12-12 09:17:42
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  使用string 自定义字符串类型
*/

let myName: string = "CHJ";
let myGender: string = "男";

/*

ES6的模板字符串
模板字符串是字符串的增强版，使用反引号`作为标识，可以多行定义，并嵌入变量
变量写在 ${} 之中

*/

let chineseSentence: string = `Hello, 我叫${myName}，性别是${myGender}`;

let englishSentence: string = `Hello, my name is ${myName}，and gender is ${myGender}`;
