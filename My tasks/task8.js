let num = 1;
function start(){
    var d = new Date();
    document.getElementById("time").innerHTML = ++num;  
    if(num>60){
        num=0
    }  
}
setInterval(start,1000)
