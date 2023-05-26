let newPhrase = document.querySelector("#phrase");

async function getPhrase(){
  const answer = await fetch("https://api.adviceslip.com/advice");
  const data = await answer.json();
  newPhrase.innerHTML = data.slip.advice;
}
getPhrase();
let button = document.querySelector("#change-advice");
let newAdvice = function(){
  getPhrase();
}

button.addEventListener('click', newAdvice);  

function playAudio(event){
  let audio = document.querySelector("#audio");
  audio.volume = 0.2;
  audio.loop = true;
  event = audio.play();
}
playAudio();