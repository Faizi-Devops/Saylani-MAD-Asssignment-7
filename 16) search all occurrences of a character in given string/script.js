var Hello = function (c, d) {
    var e = c;
    for (var i = 0; i < c.length; i++) {
        var f = e[i];
        if (f == d) {
            console.log(i);
        }
    }
};
var a = "I love Minahil";
var b = "e";
Hello(a, b);
