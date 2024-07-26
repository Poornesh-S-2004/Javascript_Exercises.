// Question: Write a JavaScript program that performs different arithmetic operations (addition, subtraction, multiplication, division, and modulus) using a callback function?

function calculation(num1,num2,callback){
    callback(num1,num2);   
}

function add(num1,num2){
    let add = num1+num2;
    console.log(add);
}
function sub(num1,num2){
    let sub = num1-num2;
    console.log(sub);
}
function mul(num1,num2){
    let mul = num1*num2;
    console.log(mul);
}
function div(num1,num2){
    let div = num1/num2;
    console.log(div);
}
function mod(num1,num2){
    let mod = num1%num2;
    console.log(mod);
}
calculation(50,50,mul);
