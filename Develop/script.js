var startButton = document.getElementById('start');
var startPage = document.getElementById('start-container');
var questionPage = document.getElementById('question-container');
var questionEl = document.getElementById('questionTitle');
var answerBtnEl = document.getElementById('answer-buttons');
var answerValEl = document.getElementById('answer-validation');
var completePage = document.getElementById('complete-container');
var finalScoreText = document.getElementById('finalscore');
var highScorePage = document.getElementById('high-score-container');
var timeUpPage = document.getElementById('time-up-container');

var nameTwo = document.getElementById("nameTwo");
var nameTwo = document.getElementById("nameTwo");
var nameThree = document.getElementById("nameThree");
var nameFour = document.getElementById("nameFour");
var nameFive = document.getElementById("nameFive");
var nameSix = document.getElementById("nameSix");
var nameSeven = document.getElementById("nameSeven");
var nameEight = document.getElementById("nameEight");
var nameNine = document.getElementById("nameNine");
var nameTen = document.getElementById("nameTen");

const timerEl = document.querySelector("#timer");
var timerInterval;
var totalTime = 60;
var secondsLeft = 0;

questionPage.classList.add('hide');

startButton.addEventListener('click',startQuiz)

function startQuiz() {
    startPage.classList.add('hide');
    questionPage.classList.remove('hide');
    plusSlides(0);
    startTimer();
}

function startTimer() {
    timerEl.textContent = totalTime;
    timerInterval = setInterval(function () {
        secondsLeft++;
        timerEl.textContent = totalTime - secondsLeft;
        if (secondsLeft >= totalTime) {
            questionPage.classList.add('hide');
            timeUpPage.classList.remove('hide');
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("question");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

function quizComplete() {
    completePage.classList.remove('hide');
    questionPage.classList.add('hide');
    finalScoreText.textContent = '15';
    stopTimer();
}

function finalScoreCalc() {
    // add calculation for final score
}



function myInitials() {
    var ainitials = !!localStorage.getItem('initials') ? JSON.parse(localStorage.getItem('initials')) : [];
    var initials = document.getElementById("initals").value;
    ainitials.push(initials);
    localStorage.setItem('initials',JSON.stringify(ainitials));
    completePage.classList.add('hide');
    highScorePage.classList.remove('hide');
    var storedInitials = JSON.parse(localStorage.getItem('initials'));

    nameOne.classList.remove('hide');
    document.getElementById("nameOne").textContent = storedInitials [0];

    if(storedInitials.length > 1) {
        document.getElementById("nameTwo").textContent = storedInitials [1];
        nameTwo.classList.remove('hide');
    }

    if(storedInitials.length > 2) {
        document.getElementById("nameThree").textContent = storedInitials [2];
        nameThree.classList.remove('hide');
    }

    if(storedInitials.length > 3) {
        document.getElementById("nameFour").textContent = storedInitials [3];
        nameFour.classList.remove('hide');
    }

    if(storedInitials.length > 4) {
        document.getElementById("nameFive").textContent = storedInitials [4];
        nameFive.classList.remove('hide');
    }

    if(storedInitials.length > 5) {
        document.getElementById("nameSix").textContent = storedInitials [5];
        nameSix.classList.remove('hide');
    }

    if(storedInitials.length > 6) {
        document.getElementById("nameSeven").textContent = storedInitials [6];
        nameSeven.classList.remove('hide');
    }

    if(storedInitials.length > 7) {
        document.getElementById("nameEight").textContent = storedInitials [7];
        nameEight.classList.remove('hide');
    }

    if(storedInitials.length > 8) {
        document.getElementById("nameNine").textContent = storedInitials [8];
        nameNine.classList.remove('hide');
    }

    if(storedInitials.length > 9) {
        document.getElementById("nameTen").textContent = storedInitials [9];
        nameTen.classList.remove('hide');
    }
  }



function mainPage() {
    location.reload();
}

function clearHighScore() {
    window.localStorage.clear();
    nameOne.classList.add('hide');
    nameTwo.classList.add('hide');
    nameThree.classList.add('hide');
    nameFour.classList.add('hide');
    nameFive.classList.add('hide');
    nameSix.classList.add('hide');
    nameSeven.classList.add('hide');
    nameEight.classList.add('hide');
    nameNine.classList.add('hide');
    nameTen.classList.add('hide');
}