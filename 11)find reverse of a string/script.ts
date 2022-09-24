let d:string="";
let Hello = (b:string):string =>{
    let c:string=b;
    for(let i:number=b.length-1;i>0;i--){
        d=d+c[i];

        

    }
    return d;

}
let a:string="Hello i am a man"
console.log( Hello(a))