let Hello = (c:string,d:string):number =>{
    let result:number=c.localeCompare(d);
    return result;

}
let a:string="Hello i am a man";
let b:string="Hello i am a man";
console.log( Hello(a,b));