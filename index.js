var drumsNumber=document.querySelectorAll(".drum").length;
for(var i=0;i<drumsNumber;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })
}

document.addEventListener("keydown",function(keyPress){
    makeSound(keyPress.key);
    buttonAnimation(keyPress.key);
})

function makeSound(key)
{
    switch(key)
    {
        case "w":
            // var tom1=new Audio("sounds/tom-1.mp3");
            new Audio("sounds/tom-1.mp3").play();
            // tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
        case "j":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        default:
            console.log(key);    
    }
}

function buttonAnimation(currKey)
{
    var activeBtn=document.querySelectorAll("." + currKey)[0];
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },150);
}


