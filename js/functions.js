function pickNewColor() {
      const random = Math.floor(Math.random() * colors.length);
      const chosen = colors[random];
      targetText.textContent = chosen.name;
      targetText.dataset.correctId = chosen.id;

      
      const randomColor = colors[Math.floor(Math.random() * colors.length)].color;
      targetText.style.color = randomColor;
    }

function startGame() {
      progress = 0;
      gameStarted = true;
      timer = 30;
      progressDisplay.textContent = `ILERLEME = ${progress}`;
      pickNewColor();
      timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;
        if (timer <= 0) {
          endGame();
        }
      }, 1000);
    } 

function resetGame() {
  progress = 0;
  gameStarted = false;
  clearInterval(timerInterval);
  timerDisplay.textContent = "30";
  progressDisplay.textContent = `ILERLEME = ${progress}`;
  targetText.textContent = "OYUN HAZIR";
  targetText.style.color = "#fff";
  delete targetText.dataset.correctId;
    boxes.forEach(box => {
    box.style.filter = "";
  });
}

 function endGame() {
  if (progress > highScore) {
    highScore = progress;
    highScoreDisplay.textContent = highScore;
  }
  alert(`Zaman doldu! Skorunuz: ${progress}`);
  resetGame();
}
    
