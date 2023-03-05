let CrashRide = document.querySelector(`#crash-ride`);
let hiHatTop = document.querySelector(`#hihat-top`);

const animateCrashorRide = () => {
CrashRide.style.transform = "rotate(0deg) scale(1.5)"

}


const animatehiHatClosed = () => {
    hiHatTop.style.top = "171px"
    
    }


window.addEventListener(`keydown`, (event) => {
let code = event.keyCode
let keyElement = document.querySelector(`div[data-key="${code}"]`)

//ispod je laksi nacin tj ako immao samo jednu liniju koda

if(!keyElement) return;


let audio = document.querySelector(`audio[data-key="${code}"]`)
audio.currentTime = 0;
audio.play()

switch(code) {
    case 69:
    case 82:
        animateCrashorRide();

    break;

    case 75:
    case 73:
        animatehiHatClosed();       

    break;

}

keyElement.classList.add(`playing`)


});

const removeCrashRideTransition = e  => {

if(e.propertyName !== `transform`) return;

e.target.classList.remove(`playing`)

}


const removehiHatTopTransition = e  => {

    if(e.propertyName !== `top`) return;
    
    e.target.style.top = "166px"    
    }

const removeKeyTransition = e => {

    if(e.propertyName !== `transform`) return


}




let drumKeys = document.querySelectorAll(".key")

drumKeys.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)

})

CrashRide.addEventListener("transitionend", removeCrashRideTransition)
hiHatTop.addEventListener("transitionend", removehiHatTopTransition)