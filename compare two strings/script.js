var Hello = function (c, d) {
    var result = c.localeCompare(d);
    return result;
};
var a = "Hello i am a man";
var b = "Hello i am a man";
console.log(Hello(a, b));
