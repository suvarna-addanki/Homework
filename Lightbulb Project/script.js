
let head = document.querySelector(".heading")
let h3Tag = document.createElement("h3")
h3Tag.textContent = "Let there be Light !"
head.appendChild(h3Tag)
 
function power(){  

    let bulb = document.getElementById("bulb")
    let message = document.getElementById("textbox")
    let quotedisplay = document.getElementById("Edison") 
    let bcolor = document.getElementById("bdy")
    
    
    if(bulb.src.match("light-bulb-off")){
        bulb.src = "Img/light-bulb-on.png";
        bcolor.style.backgroundColor = "#26ae60";
        message.textContent = "You turned on the light !"
        message.style.backgroundColor = "#20b2aa" 
        quotedisplay.src = "Img/1-thomas-edison.jpg"               
        
    }
    else {
        bulb.src = "Img/light-bulb-off.png";
        bcolor.style.backgroundColor = "#000000";
        message.textContent = "You turned off the light !"
        message.style.backgroundColor = "#ff0000"
        quotedisplay.src = "Img/2-thomas-edison.jpg"           
        
    }
    
 }

