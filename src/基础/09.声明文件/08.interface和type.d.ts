/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-20 10:03:11
 * @LastEditTime : 2019-12-20 10:08:33
 * @LastEditors  : ChaiHongJun
 * @Description: 头部文件注释
 */
/*

除了全集变量，一些类型也可以全局暴露


可以在声明文件中，声明全集接口或类型

*/


interface AjaxSettings {

  methods?: 'GET' | 'POST'
  data?: any


}

type User = {

  name: string
  age: number

}