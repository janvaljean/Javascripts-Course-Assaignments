// if you enter false ,program ask you to enter  anew note
// Assaignment 1
while (true) {
let yourNote = +prompt('Please enter your note:');
if (yourNote <= 25) {
    console.log("yourNote is FF");
    alert("yourNote is FF");
    break;
} else if (25< yourNote & yourNote <= 45) {
    console.log("yourNote is DD");
    alert("yourNote is DD");
    break;
} else if (45< yourNote & yourNote  <= 65) {
    console.log("yourNote is CC");
    alert("yourNote is CC");
    break;
} else if (65< yourNote & yourNote  <= 75) {
    console.log("yourNote is BB");
    alert("yourNote is BB");
    break;
} else if (75< yourNote & yourNote  <= 90) {
    console.log("yourNote is BA");
    alert("yourNote is BA");
    break;
} else if (90< yourNote & yourNote  <= 100) {
    console.log("yourNote is AA");
    alert("yourNote is AA");
    break;
} else{
    alert("Your note is out of range or false");
    alert("enter a valid note");
}}

