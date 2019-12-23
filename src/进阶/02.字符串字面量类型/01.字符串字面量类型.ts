/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-23 10:07:24
 * @LastEditTime : 2019-12-23 10:16:13
 * @LastEditors  : ChaiHongJun
 * @Description: 头部文件注释
 */





/*
  字符串字面量约束的是值只能是某几个字符串中的一个

  使用 type 来定义字符串字面量类型

*/


type eventName = 'click' | 'scroll' | 'mousemove'



function handleEvent(ele: Element, event: eventName): void {
  // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 
