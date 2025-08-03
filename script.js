const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = document.getElementById("guess").value;
  const result = document.getElementById("result");

  if (guess == randomNumber) {
    result.textContent = "🎉 Correct! You guessed it!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
  }
}
