var Hello = function (b, c, d) {
    switch (b) {
        case "+":
            console.log("".concat(c + d));
            break;
        case "-":
            console.log("".concat(c - d));
            break;
        case "*":
            console.log("".concat(c * d));
            break;
        case "/":
            console.log("".concat(c / d));
            break;
        case "%":
            console.log("".concat(c % d));
            break;
        default:
            break;
    }
};
var operator = "+";
var num1 = 10;
var num2 = 20;
Hello(operator, num1, num2);
