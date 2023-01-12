//average as long as i don't enter q and Q
let total = 0;
let count = 0;
let char = prompt("Enter a number:");
 while (true) {
     if (char == "q" || char == "Q") {
         break;
     }
     total += Number(char);
     count++;
     char = prompt("Enter a number:");
}
alert("The sum of the numbers is " + total);
    





