var original = "";
var Hello = function (b) {
    var c = b;
    for (var i = 0; i <= b.length - 1; i++) {
        if (c.charAt(i) === c.charAt(i).toUpperCase()) {
            original += c.charAt(i).toLowerCase();
        }
        else {
            original += c.charAt(i).toUpperCase();
        }
    }
    console.log(original);
};
var a = "Hello tHis is";
Hello(a);
