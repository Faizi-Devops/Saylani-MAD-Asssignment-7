let final:string="";
const Hello = (c:string,d:string):string =>{
    for(let i:number=0;i<=c.length-1;i++){
        if(c[i]==d){
            final+=c[i].replace(d,"M");

        }
        else{
            final+=c[i];
        }

    }
    return final;



}
let a:string="I am a man. and i like the apple";
let b:string="a";
console.log( Hello(a,b));