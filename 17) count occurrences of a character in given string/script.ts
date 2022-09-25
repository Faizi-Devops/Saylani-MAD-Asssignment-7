let count:number=0;
let Hello = (c:string,d:string) =>{
    let e:string=c;
    for(let i:number=0;i<e.length;i++){
        let l:string=e[i];
        if(l==d){
            count++;

        }
    }
    console.log(count)




}
let a:string="Hello i am a man";
let b:string="a";
Hello(a,b)