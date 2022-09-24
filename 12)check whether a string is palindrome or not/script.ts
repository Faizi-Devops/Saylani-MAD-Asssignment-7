let h:string=""
let Hello = (b:string) =>{
    let c:string=b;
    for(let i:number=c.length-1;i>=0;i--){
        h = h+ c[i]

    }
    let j:string=h;
    if(c==j){
        console.log("It's a palindrom")
    }
    else{
        console.log("it's not a palindrom");
    }

}
let a:string="101"
Hello(a)