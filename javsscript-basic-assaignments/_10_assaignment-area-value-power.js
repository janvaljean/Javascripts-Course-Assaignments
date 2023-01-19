// three func in one function

let takeSquare =  (x) => x**2;
let takeVolume = (x) => x**3;
let takePower = (x, y) => x**y;

let option = prompt("What do you want to do? : takePower, takeSquare, takeVolume");
let x = +prompt("What is the value of x");
let y = +prompt("What is the value of y");


function calc(x,option,y) {
    if (option == "takeSquare") return takeSquare(x);
    else if (option == "takeVolume") return takeVolume (x);
    else if (option == "takePower") return takePower(x,y);
}
// console.log(calc(5,"takeSquare"));
alert(calc(x,option,y));







