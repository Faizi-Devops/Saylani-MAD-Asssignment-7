var h = "";
var Hello = function (b) {
    var c = b;
    for (var i = c.length - 1; i >= 0; i--) {
        h = h + c[i];
    }
    var j = h;
    if (c == j) {
        console.log("It's a palindrom");
    }
    else {
        console.log("it's not a palindrom");
    }
};
var a = "101";
Hello(a);
