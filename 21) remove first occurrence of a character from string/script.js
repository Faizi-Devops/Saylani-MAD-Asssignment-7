var Hello = function (c, d) {
    var e = c;
    for (var i = 0; i < e.length; i++) {
        var j = e[i];
        if (j == d) {
            console.log(e.replace(d, ""));
            break;
        }
    }
};
var a = "I love the country Pakistan";
var b = "o";
Hello(a, b);
