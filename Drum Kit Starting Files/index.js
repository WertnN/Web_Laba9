const $buttonw = document.querySelector(".w")
$buttonw.addEventListener("click", event =>{   
    var myAudio = new Audio('/sounds/crash.mp3');
     myAudio.play();    
})

const $buttona = document.querySelector(".a")
$buttona.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/kick-bass.mp3');
    myAudio.play();
})

const $buttons = document.querySelector(".s")
$buttons.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/snare.mp3');
    myAudio.play();
})

const $buttond = document.querySelector(".d")
$buttond.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/tom-1.mp3');
    myAudio.play();
})

const $buttonj = document.querySelector(".j")
$buttonj.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/tom-4.mp3');
    myAudio.play();
})

const $buttonk = document.querySelector(".k")
$buttonk.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/tom-3.mp3');
    myAudio.play();
})

const $buttonl = document.querySelector(".l")
$buttonl.addEventListener("click", event =>{
    var myAudio = new Audio('/sounds/tom-2.mp3');
    myAudio.play();
})