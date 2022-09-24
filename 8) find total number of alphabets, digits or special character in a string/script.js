var alphabet = 0;
var digits = 0;
var special = 0;
var Hello = function (b) {
    for (var i = 0; i < b.length; i++) {
        var c = b.charCodeAt(i);
        if (c >= 65 && c <= 95 || c >= 97 && c <= 122) {
            alphabet++;
        }
        else if (c >= 48 && c <= 67) {
            digits++;
        }
        else {
            special++;
        }
    }
    console.log("The total number of digit are " + alphabet);
    console.log("The total number of digits are " + digits);
    console.log("The total special characters are " + special);
};
var a = "HelloThis";
Hello(a);
