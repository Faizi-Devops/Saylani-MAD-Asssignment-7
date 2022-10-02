let count:number;
let maxCount=0;
let maximumChar="";
const Hello = (b:string) =>{
    for(let i:number=0;i<=b.length-1;i++){
        count=0;


        for(let j:number=0;j<=b.length-1;j++){
            if(b[i]==b[j]){
                count++;

            }
           
            
        }
        if(maxCount<count){
            maxCount=count;
            maximumChar=b[i]

        }
        
    }
    console.log(`The character ${maximumChar} is come ${maxCount} times!`)
    




}
let a:string="Hello world l eeee";

Hello(a);