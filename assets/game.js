//lets start our JS by creating variables

let restartBtn = document.getElementById("restart");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let submitBtn = document.getElementById("submit");
let trueBtn = document.getElementById("True");
let falseBtn = document.getElementById("False");
let userScore = document.getElementById("user-score");
let totalScore = document.getElementById("total-score");
let questionText = document.getElementById("question-text")

//below will go variables for an array with the questions as well as score counter and a current question counter
let currentQuestion = 0;
let score = 0;
 
let questions = [
   {
       question: 'Where is the highest mountain in Europe?',
       answers: [
           {option: 'In the Alps', answer: false},
           {option: 'In the Caucasus', answer: true},
       ]
   },
   {
       question: 'Iran sometimes is called.......?',
       answers: [
           {option: 'Persia', answer: true},
           {option: 'Maghreb', answer: false},
       ]
   },
   {
       question: 'No plough stops for a ........ man.',
       answers: [
           {option: 'noble', answer: false},
           {option: 'dying', answer: true},
       ]
   }
]

// now we need to add trigger property to our buttons with a 'click'.
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

//work on function start-questions
function startQuestions() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.add("hide");
 }
  
 startQuestions();

 //lets do a restart function
 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    startQuestions();
 }




 function nextQuestion() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
  
    prevBtn.classList.remove("hide");
 }