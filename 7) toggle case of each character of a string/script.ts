let original:string="";
const Hello = (b:string) =>{
    let c:string=b;
    for(let i:number=0;i<=b.length-1;i++){
        if(c.charAt(i)===c.charAt(i).toUpperCase()){
            original +=c.charAt(i).toLowerCase();

        }
        else{
            original+=c.charAt(i).toUpperCase();
        }
    }
    
    console.log(original)




}
let a:string="Hello tHis is";
Hello(a);