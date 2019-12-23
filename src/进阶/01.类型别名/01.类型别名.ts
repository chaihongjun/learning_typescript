/*
 * @Author: ChaiHongJun
 * @Date: 2019-12-20 16:29:19
 * @LastEditTime : 2019-12-20 18:01:02
 * @LastEditors  : ChaiHongJun
 * @Description: 头部文件注释
 */





/*
  类型别名用来给一个类型起新的名字
*/

// 给 string 类型娶个别名 Name
type Name = string;
// 匿名函数取个别名 NameResolver
type NameResolver = () => string;
// 联合类型别名 字符串 或者 返回字符串的函数
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

