// Using build in function

const Hello = (a:string,b:string):number =>{
    let c:string=a;
    let d:number=c.indexOf(b);
    return d;


}
let fullString:string="I love the Minahil";
let firstOccur:string="M";
console.log(Hello(fullString,firstOccur));


// Using own logic building


const Hii= (g:string,h:string) =>{
    let i:string=g;
    let j:number=i.length;

    for(let k:number=0;k<j;k++){
        let l:string=i[k];
        if(l==h){
            console.log(`The occurence is ${k}`)
        }

    }



}

let e:string="I love the Minahil";
let f:string="M"


Hii(e,f);