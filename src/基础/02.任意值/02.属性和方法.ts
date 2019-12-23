/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-12 10:49:59
 * @LastEditTime: 2019-12-12 10:57:21
 * @LastEditors: ChaiHongJun
 * @Description: 头部文件注释
 */
/*
  在任意值上访问任何属性都是允许的：
*/

let anyValue: any = "hello";

console.log(anyValue.anything);

// 也允许调用任何方法
anyValue.setValue(1);
