// let vowels:number=0;
// let consonants:number=0
// const Hello = (b:string) =>{
//     let c:string=b;
//     for(let i=0;i<c.length;i++){
//         let d:number=c.charCodeAt(i);
//         if((d==65 || d==97)||(d==69 || d==101) ||(d==73 || d==105)||(d==79 || d==111)|| (d==85 || d==117)){
//             vowels=vowels+1;
//         }
//         else{
//             consonants++;
//         }
//     }
//     console.log(`Vowels is ${vowels}`);
//     console.log(`Consonants is ${consonants}`)
// }
// let a:string="";
// Hello(a)
var vowels = 0;
var consonants = 0;
var Hello = function (b) {
    var c = b.toLowerCase();
    for (var i = 0; i < c.length; i++) {
        var d = c[i];
        if (d == "a" || d == "e" || d == "i" || d == "o" || d == "u") {
            vowels++;
        }
        else if (d == "b" || d == "c" || d == "d" || d == "f" || d == "g" || d == "h" || d == "j" || d == "k" || d == "l" || d == "m" || d == "n" || d == "p" || d == "q" || d == "r" || d == "s" || d == "t" || d == "v" || d == "w" || d == "x" || d == "y" || d == "z") {
            consonants++;
        }
    }
    console.log("vowels is ".concat(vowels));
    console.log("Consonants is ".concat(consonants));
};
var a = "This is a man";
Hello(a);
