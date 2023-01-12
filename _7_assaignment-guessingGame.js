// ! number guessing game 
let num = Math.floor(Math.random() * 100) + 1; //enter a number between 1 and 100

alert(num);

let right = 5; //how many right are there

let want = "yes"      //while continuing
while  (want == "yes")  {      //while the user wants to continue

    while (right > 0) {     //while the right number is greater than 0

    
    let guess = prompt("Guess a number between 1 and 100");
    guess = parseInt(guess);
    if (guess === num) {
        alert("You guessed it right!");
        break;
    } else if (guess < num) {
        alert("Too low");
                right--;
    } else {
        alert("Too high");
                right--;
    }}
    want = prompt("do you want to continue?");
    if (want !== "yes") {
        break;
    }
    else{
        num = Math.floor(Math.random() * 100) + 1;
        alert(num);
        right = 5;
    }
    

}