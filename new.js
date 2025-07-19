document.getElementById("hardBtn").addEventListener("click", startHardMode);

function startHardMode() {
  progress = 0;
  gameStarted = true;
  timer = 15; 
  progressDisplay.textContent = `ILERLEME = ${progress}`;
  targetText.textContent = "HARD MOD!";
  targetText.style.color = "#ff4444";
  pickNewColor();
  clearInterval(timerInterval);
  timerDisplay.textContent = timer;
  timerInterval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      endGame();
    }
  }, 1000);
  
  boxes.forEach(box => {
    box.style.filter = "brightness(0.7)";
  });
}

const warning = document.getElementById("warning");

boxes.forEach(box => {
  box.addEventListener("click", (e) => {
    if (!gameStarted) return;

    const correctId = targetText.dataset.correctId;
    if (e.target.id === correctId) {
      correctSound.play();
      progress += 1;
      progressDisplay.textContent = `ILERLEME = ${progress}`;
      pickNewColor();
    } else {
      wrongSound.play();
    
      warning.style.display = "block";
      setTimeout(() => {
        warning.style.display = "none";
        pickNewColor(); 
      }, 1000); 
    }
  });
});

