var noofbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<noofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(buttonhtml);
    });
    document.addEventListener("keypress",function(event){
        makesound(event.key);
        buttonanimation(event.key);
    });


}
function makesound(key){
    switch (key) {
        case "w":
            var crash=new Audio("javascript/sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickbass=new Audio("javascript/sounds/kick-bass.mp3");
            kickbass.play();
            break;
            case "s":
                var snare=new Audio("javascript/sounds/snare.mp3");
                snare.play();
                break;
    
            case "d":
                var tom1=new Audio("javascript/sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "j":
                var tom2=new Audio("javascript/sounds/tom-2.mp3");
                tom2.play();
                break;
    
            case "k":
                var tom3=new Audio("javascript/sounds/tom-3.mp3");
                tom3.play();
                break;
    
            case "l":
                var tom4=new Audio("javascript/sounds/tom-4.mp3");
                tom4.play();
                break;
    
        default:console.log(buttonhtml);
            break;
    }
}
function buttonanimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
   
    setTimeout(function(){
       activeButton.classList.remove("pressed");
    },100);
   }