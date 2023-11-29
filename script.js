let randomNumber = Math.floor(Math.random() * 1000000) + 1;

let attempts = 0;

function playAgain() {
  togglePlayAgain();
  enableInput();
  document.getElementById('message').textContent="";
  document.getElementById('guessField').value="";
  randomNumber = Math.floor(Math.random() * 1000000) + 1;

 attempts = 0;
  
}

function checkGuess() {

  const guess = parseInt(document.getElementById('guessField').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 1000000) {
    message.textContent = 'הכניסו מספר חוקי בין 1 ל 1000000';
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `כל הכבוד ניחשתם את המספר ${randomNumber}  ב ${attempts}  נסיונות`;
    disableInput();
    togglePlayAgain();
  } else if (guess < randomNumber) {
    message.textContent = 'נסו מספר גדול יותר';
  } else {
    message.textContent = 'נסו מספר קטן יותר';
  }
}

function togglePlayAgain()
{
  let element = document.getElementById("btnAgain");
  let hidden = element.getAttribute("hidden");

  if (hidden) {
     element.removeAttribute("hidden");
  } else {
     element.setAttribute("hidden", "hidden");
  }
}

function disableInput() {
  document.getElementById('guessField').disabled = true;
  document.querySelector('button').disabled = true;
}

function enableInput() {
  document.getElementById('guessField').disabled = false;
  document.querySelector('button').disabled = false;
}
