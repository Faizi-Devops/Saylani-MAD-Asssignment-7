const Hello = (b:string) =>{
    let c:string=b.toLowerCase();
    let d:number=c.charCodeAt(0);
   (d>=97 && d<=122)?console.log(`${c} is a character`):console.log(`${c} is not a charater`);




}
let a:string="1";
Hello(a)