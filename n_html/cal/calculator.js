import  { add, subtract, multiply, divide } from "./arithmetic_fns.js";
let num1,num2,operator;
num1=window.prompt("Enter 1st number");
num2=window.prompt("Enter 2nd number");
operator=window.prompt("Enter Operator");
num1=Number(num1);
num2=Number(num2);
if(operator=="+"){
  add(num1,num2); 
}
else if(operator=="-"){
  subtract(num1,num2);
}
else if(operator=="*"){
  multiply(num1,num2); 
}
else if(operator=="/"){
  divide(num1,num2);
}
