//We can deaclare the variables by following types:
/*const = can't be re-assigned a value and can't be declared again  (block scope)
 *let = can be re-assigned a value but can't be declared again (block scope)
 *var = it can be re-assigned a value and it can also be declared again  (Global scope)

* Never use var in your code instead of let because of block and functional scope issues.
 */

const StuId = 18;
let StuEmail = "demo123@gmail.com";
var StuPassword = "125";
StuCity = "Delhi";
let StuState; // this will print undefined 

//when we want to print the multiple variables then we can use console.table instead of console.log 
console.table([StuId,StuEmail,StuPassword,StuCity,StuState])