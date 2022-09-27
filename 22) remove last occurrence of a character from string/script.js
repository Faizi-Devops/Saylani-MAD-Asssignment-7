var final = "";
var Hello = function (c, d) {
    var e = c.lastIndexOf(d);
    for (var i = 0; i <= c.length - 1; i++) {
        if (i == e) {
            final += c[i].replace(d, "");
        }
        else {
            final += c[i];
        }
    }
    return final;
};
var a = "Hello world";
var b = "o";
console.log(Hello(a, b));
