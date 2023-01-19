//! leap year
function leapYear(year) {
  if (year % 4 === 0 && year % 100!== 0 || year % 400 === 0) {
    return "your entered year is a leap year";

  } else {
    return "your entered year is not a leap year";

  }
}
let year;
let want = "yes"      //while continuing
while (want == "yes") {
    year = prompt('Enter a year: ');
    year = parseInt(year);
    alert(leapYear(year));
    alert("do you want to continue?");
    want = prompt("enter yes or no");
}

    
