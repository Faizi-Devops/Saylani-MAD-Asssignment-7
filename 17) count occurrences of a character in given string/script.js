var count = 0;
var Hello = function (c, d) {
    var e = c;
    for (var i = 0; i < e.length; i++) {
        var l = e[i];
        if (l == d) {
            count++;
        }
    }
    console.log(count);
};
var a = "Hello i am a man";
var b = "a";
Hello(a, b);
