var Hello = function (b) {
    var c = b.toLowerCase();
    switch (c) {
        case "a":
            console.log("The character is vowel");
            break;
        case "e":
            console.log("The character is wovel");
            break;
        case "i":
            console.log("The character is wovel");
            break;
        case "o":
            console.log("The character is wovel");
            break;
        case "u":
            console.log("The character is wovel");
            break;
        default:
            console.log("The character is consonant");
            break;
    }
};
var a = "b";
Hello(a);
