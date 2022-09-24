// using build in function

const Hello = (c:string,d:string) =>{
    let e:string=c;
    let f:number=e.lastIndexOf(d);
    console.log(f)




}
let a:string="I love the conutry Pakistan";
let b:string="n"
Hello(a,b)



const Hii = (i:string,j:string) =>{
    let k:string=i;
    for(let l:number=k.length-1;l>=0;l--)
    {
        let m:string=k[l];
        if(j==m){
            console.log(l);
            break;
            

        }
        

    }




}
let g:string="I love the country pakistan";
let h:string="n";
Hii(g,h)