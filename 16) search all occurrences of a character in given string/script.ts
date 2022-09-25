let Hello = (c:string,d:string) =>{
    let e:string=c;
    for(let i:number=0;i<c.length;i++){
        let f:string=e[i];
        if(f==d){
            console.log(i)

        }
    }



}
let a:string="I love Minahil";
let b:string="e";
Hello(a,b);
