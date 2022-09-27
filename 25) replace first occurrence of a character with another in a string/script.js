var final = "";
var Hello = function (c, d) {
    var e = c.indexOf(d);
    for (var i = 0; i <= c.length - 1; i++) {
        if (i == e) {
            final += c[i].replace(d, "M");
        }
        else {
            final += c[i];
        }
    }
    return final;
};
var a = "Hello called";
var b = "e";
console.log(Hello(a, b));
