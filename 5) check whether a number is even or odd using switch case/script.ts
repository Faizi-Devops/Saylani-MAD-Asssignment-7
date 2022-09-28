const Hello = (b:number) =>{

    switch (b%2) {
        case 0:
            console.log(`${b} is even`);
            
            break;
        case 1:
            console.log(`${b} is odd`)
    
        default:
            break;
    }



}
let a:number=11;
Hello(a)