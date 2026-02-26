var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;
function animateChar1() {
   if (event.keyCode == 37 && left < 1500) {
      left = left + 10
      char1.style.left = left + "px"
      char1.src = "https://www.fightersgeneration.com/characters/ash-walk.gif"
      char1.style.transform = "scaleX(-1)"

   }
   if (event.keyCode == 39 && left > 10) {
      left = left - 10
      char1.style.left = left + "px"
      char1.style.transform = "scaleX(1)"
   }
   if (event.keyCode === 13) {
      char1.src = "https://www.fightersgeneration.com/np7/char/gifs/ash/ash-fcd.gif"
      char1.style.transform = "scaleX(1)"
      setTimeout(() => {
         char1.src = 'https://www.fightersgeneration.com/characters/ash-stance.gif'
      }, 1000)

   }
}
window.onkeydown = animateChar1

var right = 0;
function animateChar2() {

   if (event.keyCode == 68 && right < 1500) {
      right = right + 10
      char2.style.left = right + "px"
      char2.src = "https://www.fightersgeneration.com/characters/alex-walk.gif"
      char2.style.transform = "scaleX(1)"

   }
   if (event.keyCode == 65 && right > 10) {
      right = right - 10
      char2.style.left = right + "px"
      char2.style.transform = "scaleX(-1)"
   }
   if (event.keyCode === 32) {
      char2.src = "https://www.fightersgeneration.com/characters/alex-chop.gif"
      char2.style.transform = "scaleX(1)"
      setTimeout(() => {
         char2.src = 'https://www.fightersgeneration.com/characters/alex-ts-stance.gif'
      }, 1000)

   }
}


window.onkeydown = animateChar2

