var Hello = function (b) {
    switch (b % 2) {
        case 0:
            console.log("".concat(b, " is even"));
            break;
        case 1:
            console.log("".concat(b, " is odd"));
        default:
            break;
    }
};
var a = 11;
Hello(a);
