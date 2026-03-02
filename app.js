// PLAYER 1 ALERT
alert(
"══════════════════════════\n" +
"        🔴 PLAYER 1 🔴\n" +
"══════════════════════════\n\n" +
"⬅️  Left Arrow   → Move Left\n" +
"➡️  Right Arrow  → Move Right\n" +
"⏎  Enter Key    → ATTACK\n\n" +
"⚔️ Get Ready Player 1!"
);


// PLAYER 2 ALERT
alert(
"══════════════════════════\n" +
"        🔵 PLAYER 2 🔵\n" +
"══════════════════════════\n\n" +
"🅰️  A Key        → Move Left\n" +
"🅳  D Key        → Move Right\n" +
"␣  Space Bar    → ATTACK\n\n" +
"🔥 Get Ready Player 2!"
);

document.write("<h1>Street Fighter Game</h1>");

var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");

var left = 0;
var right = 0;
function animateChar1() {

   //.....PLAYER 1 CONTROLS.....//

   if (event.keyCode == 39 && left < 1500) {
      left = left + 10
      char1.style.left = left + "px"
      char1.src = "https://www.fightersgeneration.com/characters/ash-walk.gif"
      char1.style.transform = "scaleX(-1)"
   }
   if (event.keyCode == 37 && left > 10) {
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

   //.....PLAYER 2 CONTROLS.....//

    if (event.keyCode == 65 && right < 1500) {
      right = right + 10
      char2.style.right = right + "px"
      char2.src = "https://www.fightersgeneration.com/characters2/mar-walkf.gif"
      char2.style.transform = "scaleX(-1)"
      setTimeout(() => {
         char2.src = 'https://www.fightersgeneration.com/characters2/marcobc.gif'
      }, 1000)


   }
   if (event.keyCode == 68 && right > 10) {
      right = right - 10
      char2.style.right = right + "px"
      char2.style.transform = "scaleX(1)"
      setTimeout(() => {
         char2.src = 'https://www.fightersgeneration.com/characters2/marcobc.gif'
      }, 1000)

   }
   if (event.keyCode === 32) {
      char2.src = "https://www.fightersgeneration.com/characters2/mar-a1.gif"
      char2.style.transform = "scaleX(-1)"
      setTimeout(() => {
         char2.src = 'https://www.fightersgeneration.com/characters2/marcobc.gif'
      }, 2000)

   }
}
window.onkeydown = animateChar1




