// Using build in function
var Hello = function (a, b) {
    var c = a;
    var d = c.indexOf(b);
    return d;
};
var fullString = "I love the Minahil";
var firstOccur = "M";
console.log(Hello(fullString, firstOccur));
// Using own logic building
var Hii = function (g, h) {
    var i = g;
    var j = i.length;
    for (var k = 0; k < j; k++) {
        var l = i[k];
        if (l == h) {
            console.log("The occurence is ".concat(k));
        }
    }
};
var e = "I love the Minahil";
var f = "M";
Hii(e, f);
