export function add(x, y) {
  document.getElementById("p1").innerHTML = "Addition: " + x +"+"+ y +"="+(x+y) ;
}

export function subtract(x, y) {
  document.getElementById("p1").innerHTML = "Subtraction: "+ x +"-"+ y +"="+ (x-y);
}

export function multiply(x, y) {
  document.getElementById("p1").innerHTML = "Multiplition: " + x +"*"+ y +"="+ (x*y);
}

export function divide(x, y) {
  if (y == 0) {
    document.getElementById("p1").innerHTML = "error,you cannot divide by zero";
  }
   else{
    document.getElementById("p1").innerHTML = "Division: "+ x +"/"+ y +"="+ (x/y); 
   }
}