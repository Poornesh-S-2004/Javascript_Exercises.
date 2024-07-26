// Question: Write a JavaScript program that finds the minimum and maximum values in an array of numbers.

function minFinder(arr){
    return Math.min(...arr);
}
function maxFinder(arr){
    return Math.max(...arr);
}
console.log(maxFinder([10,20,30,3]));

//Output: 30