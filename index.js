/*
 * @Author: WilliamXie 854933448@qq.com
 * @Date: 2022-06-07 14:29:34
 * @LastEditors: WilliamXie 854933448@qq.com
 * @LastEditTime: 2022-06-07 14:36:34
 * @FilePath: \WEB\OOCL\day6-10\JS-Object-english-2022-5-30-8-10-47-269\index.js
 */

// 1. Program and observe the following requirements:  
// - Create a null object and set its variable name as user; 
let user = {}

// - Add a name attribute and set its value as John; 
user.name = 'John'

// - Add a surname attribute and set its value as Mike; 
user.surname = 'Mike'

// - Modify the value of name attribute as Peter; 
user.name = 'Peter'

// - Delete name attribute of user. 
delete user.name


//2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
function computeFruit(fruit) {
  let total = 0
  Object.values(fruit).forEach(v => { total += v })
  return total
}

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};

console.log(computeFruit(fruit)); // 50