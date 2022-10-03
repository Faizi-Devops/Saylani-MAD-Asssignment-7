var count;
var Hello = function (b) {
    var c = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i <= c.length - 1; i++) {
        count = 0;
        for (var j = 0; j <= c.length - 1; j++) {
            if (c[i] == b[j]) {
                count = count + 1;
            }
        }
        if (count > 0)
            console.log("".concat(c[i], "  comes the ").concat(count, " times"));
    }
};
var a = "hello world";
Hello(a);
