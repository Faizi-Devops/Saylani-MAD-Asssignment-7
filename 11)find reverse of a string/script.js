var d = "";
var Hello = function (b) {
    var c = b;
    for (var i = b.length - 1; i > 0; i--) {
        d = d + c[i];
    }
    return d;
};
var a = "Hello i am a man";
console.log(Hello(a));
