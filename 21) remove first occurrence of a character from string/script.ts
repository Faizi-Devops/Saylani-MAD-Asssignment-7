let final:string="";
const Hello = (c:string,d:string) =>{
    let e:number=c.indexOf(d);
    for(let i :number=0;i<=c.length-1;i++){
        if(i==e){
            final+=c[i].replace(d,"")
            
        }
        else{
            final+=c[i]
        }
    }
    console.log(final)
    



}
let a:string="Hello world";
let b:string="o";
Hello(a,b)