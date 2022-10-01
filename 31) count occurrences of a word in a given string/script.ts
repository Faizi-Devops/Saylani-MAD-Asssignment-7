let count:number=0;
const Hello = (c:string,d:string):number =>{
    let e:string[]=c.split(" ");
    for(let i:number=0;i<=e.length-1;i++){
        if(d==e[i]){
            count=count+1;
            
        }
    }
    return count;




}
let a:string="I love the love love";
let b:string="love";
console.log( Hello(a,b));