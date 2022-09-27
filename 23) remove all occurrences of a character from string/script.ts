let final:string="";
const Hello = (c:string,d:string):string =>{
    for(let i:number=0;i<=c.length-1;i++){
        if(c[i]==d){
            final+=c[i].replace(d,"");

        }
        else{
            final+=c[i];
        }

    }
    return final


}
let a:string="geeks for geeks";
let b:string="g";

console.log( Hello(a,b));

