var imagen_animada = document.getElementById("imagen_animada")
var mega_box = document.getElementById("mega_box")
var change = true
var opacity = 0
setInterval(()=>{
    if(change){
        imagen_animada.src = "./assets/mono_aguacate_2.png"
        change = false
    }else{
        imagen_animada.src = "./assets/mono_aguacate.png"
        change = true
    }
},1000)

setInterval(()=>{
    if(opacity <= 1){
        opacity += 0.005
        mega_box.style.opacity = opacity
    }
},10)

document.addEventListener("touchend", ()=>{
    var sound = new Audio("./assets/water-droplet-2-165634.mp3")
    sound.load()
    sound.play() 
})
document.addEventListener("click", ()=>{
    var sound = new Audio("./assets/water-droplet-2-165634.mp3")
    sound.load()
    sound.play() 
})