let count:number;
const Hello =(b:string) =>{
    let c:string="abcdefghijklmnopqrstuvwxyz";
    for(let i:number=0;i<=c.length-1;i++){
        count=0;
        for(let j:number=0;j<=c.length-1;j++){
            if(c[i]==b[j]){
                count=count+1;


            }
        }
        if(count>0)
        console.log(`${c[i]}  comes the ${count} times`)
    }







}
let a:string="hello world";
Hello(a);