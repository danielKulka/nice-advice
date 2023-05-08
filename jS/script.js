let newPhrase = document.querySelector("#phrase");

async function getPhrase(){
  const answer = await fetch("https://api.adviceslip.com/advice");
  const data = await answer.json();
  newPhrase.innerHTML = data.slip.advice;
}

let button = document.querySelector("#change-advice");
let newAdvice = function(){
  getPhrase();
}

button.addEventListener('click', newAdvice);

getPhrase();

function playAudio(){
  const audio = document.querySelector('audio');
  audio.volume = .1;
  audio.loop = true;
  audio.play();
}
playAudio();