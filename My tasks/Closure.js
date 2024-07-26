//"What is the output of the following code, and how does it demonstrate the concept of a closure in JavaScript?"

function parent(){
    const a=10
    function child(){
        console.log(a);
    }
    return child;
}
const closure = parent();
closure();

// Output: 10