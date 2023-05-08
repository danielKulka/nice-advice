let newPhrase = document.querySelector("#phrase");

async function getPhrase(){
  const answer = await fetch("https://api.adviceslip.com/advice");
  const data = await answer.json();
  newPhrase.innerHTML = data.slip.advice;
}

let button = document.querySelector("#change-advice");
let newAdvice = function(){
  getPhrase();
  const audioPlay = new Audio("assets/waterfall.mp3");  
  audioPlay.volume = .1;
  audioPlay.loop = true;
  audioPlay.play();
}

button.addEventListener('click', newAdvice);  