var Hello = function (a) {
    (a % 4 == 0) ? console.log("The ".concat(a, " is leap year")) : console.log("The ".concat(a, " is not a leap year"));
};
var year = 2017;
Hello(year);
