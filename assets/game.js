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

