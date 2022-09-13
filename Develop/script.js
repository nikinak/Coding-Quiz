var startButton = document.getElementById('start');
var startPage = document.getElementById('start-container');
var questionPage = document.getElementById('question-container');
var questionEl = document.getElementById('questionTitle');
var answerBtnEl = document.getElementById('answer-buttons');
var answerValEl = document.getElementById('answer-validation');
var completePage = document.getElementById('complete-container');
var finalScoreText = document.getElementById('finalscore');
var highScorePage = document.getElementById('high-score-container');

questionPage.classList.add('hide');

startButton.addEventListener('click',startQuiz)

function startQuiz() {
    startPage.classList.add('hide');
    questionPage.classList.remove('hide');
    plusSlides(0);
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
}

function finalScoreCalc() {
    // add calculation for final score
}

function addHighScore() {
    completePage.classList.add('hide');
    highScorePage.classList.remove('hide');
    // add table that stores high scores
}

function mainPage() {
    location.reload();
}

function clearScore() {
    // add function that clears local data
}