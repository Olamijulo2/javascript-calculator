// Olayinka's calculator

var a = prompt ("Enter first number: " );

let calc = prompt ( "Choose any of these options for your calculation: \n'+' for Addition \n'-' for Subtraction \n'*' for Multiplication \n'/' for Division \n'%' for Modulus");
    
    if (calc == "+"){
        var b = prompt ("Enter second number: " );
        addNum();
    }
    else if (calc == "-") {
        var b = prompt ("Enter second number: " );
        subtractNum();
    }
    else if (calc == "*") {
        var b = prompt ("Enter second number: " );
       multiplyNum();
    }
    else if (calc == "/") {
        var b = prompt ("Enter second number: " );
       divideNum();
    }
    else if (calc == "%") {
        var b = prompt ("Enter second number: " );
       modulusNum();
    }
    else{
        alert("Please select a valid operator");
    }


function addNum(){
    let result = Number(a) + Number(b);
    document.write(a);
    document.write(calc);
    document.write(b);
    document.write(" = " + result);
}
    
function subtractNum(){
    let result = a - b;
    document.write(a);
    document.write(calc);
    document.write(b);
    document.write(" = " + result);
}
    
function multiplyNum(){
    let result = a * b;
    document.write(a);
    document.write(calc);
    document.write(b);
    document.write(" = " + result);
}
    
function divideNum(){
    let result = a / b;
    document.write(a);
    document.write(calc);
    document.write(b);
    document.write(" = " + result);
}
    
function modulusNum(){
    let result = a % b;
    document.write(a);
    document.write(calc);
    document.write(b);
    document.write(" = " + result);
}