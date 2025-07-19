    const colors = [
      { name: "KIRMIZI", id: "one", color: "red" },
      { name: "SARI", id: "two", color: "yellow" },
      { name: "MAVİ", id: "three", color: "blue" },
      { name: "MOR", id: "four", color: "purple" }
    ];

    let progress = 0;
    let gameStarted = false;
    let timer = 30;
    let timerInterval;
    let highScore = 0;
    const highScoreDisplay = document.getElementById("highScoreDisplay");

    const progressDisplay = document.querySelector(".c_navbar h3");
    const targetText = document.querySelector(".c_text_area h3");
    const boxes = document.querySelectorAll(".C_color_box");
    const timerDisplay = document.getElementById("timerDisplay");

    const correctSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    const wrongSound = new Audio('https://www.soundjay.com/button/beep-09.wav');
    boxes.forEach(box => {
      box.addEventListener("click", (e) => {
        if (!gameStarted) return;
       });
    });

    document.getElementById("startBtn").addEventListener("click", startGame);
    document.getElementById("resetBtn").addEventListener("click", resetGame);