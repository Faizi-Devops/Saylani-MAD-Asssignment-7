let Hello = (b:string):string =>{
    let c:string=b.slice(0,16);
    return c

}
let a:string="Hello i am a man";
console.log(Hello(a));