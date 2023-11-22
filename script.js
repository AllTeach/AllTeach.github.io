let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function playAgain() {
  togglePlayAgain();
  enableInput();
  document.getElementById('message').textContent="";
  document.getElementById('guessField').value="";
  randomNumber = Math.floor(Math.random() * 100) + 1;

 attempts = 0;
  
}

function checkGuess() {

  const guess = parseInt(document.getElementById('guessField').value);
  const message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`;
    disableInput();
    togglePlayAgain();
  } else if (guess < randomNumber) {
    message.textContent = 'Try a higher number.';
  } else {
    message.textContent = 'Try a lower number.';
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
