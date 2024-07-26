function darkmode(){
    document.body.style.backgroundColor="grey";
    document.body.style.color="black";
    document.getElementById("button")
    button.innerHTML = "Lightmode" ;
    button.innerHTML += `<i class="bi bi-emoji-sunglasses"></i>`;
   
}
function lightmode(){
    document.body.style.backgroundColor="yellow";
    document.body.style.color="black";
    document.getElementById("button").innerText = "Darkmode";
    button.innerHTML = "Darkmode" ;
    button.innerHTML += `<i class="bi bi-moon-stars-fill"></i>`
}
function mode(){
    let click =document.getElementById("button").innerText;
    if(click=="Darkmode"){
       darkmode();
    } else if(click=="Lightmode"){
        lightmode();
     } 
}
