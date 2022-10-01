var count = 0;
var Hello = function (c, d) {
    var e = c.split(" ");
    for (var i = 0; i <= e.length - 1; i++) {
        if (d == e[i]) {
            count = count + 1;
        }
    }
    return count;
};
var a = "I love the love love";
var b = "love";
console.log(Hello(a, b));
