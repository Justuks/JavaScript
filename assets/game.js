//here we will assign our variables via DOM


let restartBtn = document.getElementById("restart");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let submitBtn = document.getElementById("submit");
let trueBtn = document.getElementById("True");
let falseBtn = document.getElementById("False");
let userScore = document.getElementById("user-score");
let totalScore = document.getElementById("total-score");
let questionText = document.getElementById("question-text")


//an array of questions and counter for score and a current question
let currentQuestion = 0;
let score = 0;
 


let questions = [
   {
       question: 'Where is the highest mountain of Europe',
       answers: [
           {option: 'In the Caucasus', answer: true},
           {option: 'In the Alps', answer: false},
       ]
   },
   {
       question: 'Iran is also known as .......',
       answers: [
           {option: 'Maghreb', answer: false},
           {option: 'Persia', answer: true},
       ]
   },
   {
       question: 'No plough stops for the ........ man.',
       answers: [
           {option: 'noble', answer: false},
           {option: 'dying', answer: true},
       ]
   }
]

//provide trigger for buttons using 'click'
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);


//function to start our questions below here

function beginQuiz() {
   
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
  
 beginQuiz();

 //function to reset the score and to reveal hidden class
 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }

 //function to reveal next question
 function next() {
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

 //function that will go to the previous question
 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
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
  
    nextBtn.classList.remove("hide");
 }
 //function submit, which displays a message but also hides other buttons apart restart.
 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }
