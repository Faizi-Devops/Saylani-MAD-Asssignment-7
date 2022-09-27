let final:string="";
const Hello = (c:string,d:string):string =>{
    let e:number=c.lastIndexOf(d);
   for(let i:number=0;i<=c.length-1;i++){
    if(i==e){
        final+=c[i].replace(d,"M");
    }
    else{
        final+=c[i];
    }


   }
   return final;




}
let a:string="Hello called";
let b:string="e";
console.log( Hello(a,b));
