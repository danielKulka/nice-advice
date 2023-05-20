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

let audio = document.querySelector("#audio");

audio.volume = .2;
audio.loop = true;