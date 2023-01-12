// (32 °F − 32) × 5/9 = 0 °C

let option = +prompt("if you want to convert from Celsius to Fahrenheit, enter '1' or if from Fahrenheit to Celsius, enter '0' ")

if (option == 1) {

    let celsius = +prompt("enter the temperature in Celsius ")
    let fahrenheit = (celsius * 9 / 5) + 32
    alert("the temperature in Fahrenheit is " + fahrenheit)
;

} else if (option == 0) {

    let fahrenheit = +prompt("enter the temperature in Fahrenheit ")
    let celsius = (fahrenheit - 32) * 5 / 9
    alert("the temperature in Celsius is " + celsius)

}
