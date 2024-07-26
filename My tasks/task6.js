// Question: Write a JavaScript program that calculates the sum of two numbers and displays the result using a callback function?

// Answer:
function display(result){
    console.log(result);
}
function calculation(num1,num2,callback){
    let total = num1+num2
    callback(total);
    
}
calculation(50,50,display)

//Output: 100
