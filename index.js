// A JavaScript Code
const buttons = document.querySelectorAll('button');

function MakeSound(key){
    buttonAnimation(key)
    switch (key) {
     case "a":
         const tom1 = new Audio('./sounds/tom-1.mp3')
         tom1.play()
         break;

     case "s":
         const tom2 = new Audio('./sounds/tom-2.mp3')
         tom2.play()
         break;

     case "d":
         const tom3 = new Audio('./sounds/tom-3.mp3')
         tom3.play()
         break;

     case "f":
         const tom4 = new Audio('./sounds/tom-4.mp3')
         tom4.play()
         break;

     case "h":
         const snare = new Audio('./sounds/snare.mp3')
         snare.play()
         break;

     case "j":
         const crash = new Audio('./sounds/crash.mp3')
         crash.play()
         break;

     case "k":
         const kickBass = new Audio('./sounds/kick-bass.mp3')
         kickBass.play()
         break;
    
     default: alert('Sorry this letter is not assigned to any of the sounds')
         break;
    }
}

for (let num = 0; num < buttons.length; num++) {
    buttons[num].addEventListener('click', function(){
        const text = this.innerHTML
        MakeSound(text)
        buttonAnimation(text)
        console.log("Button Click");
    })
}

document.addEventListener('keydown', function(event){
    MakeSound(event.key)
})

function buttonAnimation(currentKey){
    const activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add('pressed')

    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 100);
}