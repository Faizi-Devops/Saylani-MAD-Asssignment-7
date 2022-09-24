// using build in function
var Hello = function (c, d) {
    var e = c;
    var f = e.lastIndexOf(d);
    console.log(f);
};
var a = "I love the conutry Pakistan";
var b = "n";
Hello(a, b);
var Hii = function (i, j) {
    var k = i;
    for (var l = k.length - 1; l >= 0; l--) {
        var m = k[l];
        if (j == m) {
            console.log(l);
            break;
        }
    }
};
var g = "I love the country pakistan";
var h = "n";
Hii(g, h);
