// Question: Write a JavaScript function that generates a random integer between a given start and end value (inclusive)

function randomNumberGenerator(start,end){
    let randNum = Math.random()*end;
    while(start>randNum){
        randNum = Math.random()*end;
    }
    return Math.round(randNum);
}
console.log(randomNumberGenerator(10,15));

//Output:12