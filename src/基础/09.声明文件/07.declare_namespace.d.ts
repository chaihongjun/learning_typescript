/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-19 11:03:15
 * @LastEditTime : 2019-12-19 11:59:06
 * @LastEditors  : ChaiHongJun
 * @Description: 头部文件注释
 */

/*

  namespace 历史原因不再使用
  但是在声明文件中依然可以声明包含有多个属性的全局变量

  jquery 就是一个包含多个属性的全局变量

*/

declare namespace JQ {

  //包含的属性
  function ajax(url: string, settings?: any): void;
  const Version: number;


}