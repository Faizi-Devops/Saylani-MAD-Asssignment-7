const Hello = (b:string,c:number,d:number) =>{
    switch (b) {
        case "+":
            console.log(`${c+d}`)
            break;
            case "-":
                console.log(`${c-d}`)
                break;
                case "*":
                console.log(`${c*d}`)
                break;
                case "/":
                console.log(`${c/d}`)
                break;
                case "%":
                console.log(`${c%d}`)
                break;
    
        default:
            break;
    }




}
let operator:string="+";
let num1:number=10;
let num2:number=20;
Hello(operator,num1,num2)