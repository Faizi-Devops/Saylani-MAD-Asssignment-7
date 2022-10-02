var count;
var maxCount = 0;
var maximumChar = "";
var Hello = function (b) {
    for (var i = 0; i <= b.length - 1; i++) {
        count = 0;
        for (var j = 0; j <= b.length - 1; j++) {
            if (b[i] == b[j]) {
                count++;
            }
        }
        if (maxCount < count) {
            maxCount = count;
            maximumChar = b[i];
        }
    }
    console.log("The character ".concat(maximumChar, " is come ").concat(maxCount, " times!"));
};
var a = "Hello world l eeee";
Hello(a);
