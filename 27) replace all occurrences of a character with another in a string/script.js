var final = "";
var Hello = function (c, d) {
    for (var i = 0; i <= c.length - 1; i++) {
        if (c[i] == d) {
            final += c[i].replace(d, "M");
        }
        else {
            final += c[i];
        }
    }
    return final;
};
var a = "I am a man. and i like the apple";
var b = "a";
console.log(Hello(a, b));
