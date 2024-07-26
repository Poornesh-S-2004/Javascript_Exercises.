// What will be the output of the console and how often will "Start" appear when using setInterval, and what will be the output of the console when calling the running function immediately?

function start(){
    console.log("Start")
}
setInterval(start,5000)

function running(){
    console.log("Running")
}
running();

// Output:

// Running
// Start (after 5 seconds)
// Start (after 10 seconds)
// Start (after 15 seconds) it continue till end.
