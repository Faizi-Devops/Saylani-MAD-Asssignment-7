let alphabet:number=0;
let digits:number=0;
let special:number=0;
let Hello = (b:string) =>{
    for(let i:number=0;i<b.length;i++){
        let c:number=b.charCodeAt(i);
        if(c>=65 && c<=95 || c>=97 && c<=122){
           alphabet++;
              
        }
        else if(c>=48 && c<=67)
        {
            digits++;

        }
        else{
            special++;

        }

     

    }
    console.log("The total number of digit are " + alphabet);
    console.log("The total number of digits are " + digits);
    console.log("The total special characters are " + special)
    
    
    



}
let a:string="HelloThis"
Hello(a)