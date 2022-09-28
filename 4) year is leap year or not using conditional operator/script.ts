const Hello = (a:number) =>{
    (a%4==0)?console.log(`The ${a} is leap year`):console.log(`The ${a} is not a leap year`);



}
let year:number=2017;
Hello(year)