var Hello = function (b) {
    var c = b.toLowerCase();
    var d = c.charCodeAt(0);
    (d >= 97 && d <= 122) ? console.log("".concat(c, " is a character")) : console.log("".concat(c, " is not a charater"));
};
var a = "1";
Hello(a);
