var final = "";
var Hello = function (c, d) {
    for (var i = 0; i <= c.length - 1; i++) {
        if (c[i] == d) {
            final += c[i].replace(d, "");
        }
        else {
            final += c[i];
        }
    }
    return final;
};
var a = "geeks for geeks";
var b = "g";
console.log(Hello(a, b));
