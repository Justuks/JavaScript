//lets write few functions that will display messages when the buttons are clicked
function answer1(){
    console.log(alert('Wrong answer, please try again'))
}
function answer2(){
    console.log(alert('Correct. By the way, I am a pop up message, - grand daddy of JavaScript.'))
}

//now lets write script for our estimator
let wind = 0;
let display = document.getElementById('wind-display');
let fuel = 5;
let windOnFuel = document.getElementById('fuel-gauge');
let range = 300;
let displayRange = document.getElementById('range-finder');
//need to tie all the parameters below by 'one rope, so that change in one, will affect the other

function up(){
    if(wind === 30)return false
   console.log(display.innerHTML = ++ wind);
   console.log(windOnFuel.innerHTML = fuel ++);
   console.log(displayRange.innerHTML = range -= 2);
}
up()

function down(){
    if(wind < 1)return false
    console.log(display.innerHTML = -- wind);
    console.log(windOnFuel.innerHTML = -- fuel);
    console.log(displayRange.innerHTML = range += 2);
}
down()

let rpm = 500
let rpmDisplay = document.getElementById('rpm-display')

function high(){
    if(rpm === 2400)return false
    console.log(rpmDisplay.innerHTML  = rpm += 100);
    console.log(windOnFuel.innerHTML = fuel += 0.5);
    console.log(displayRange.innerHTML = range --);
}
high()


function low(){
    if(rpm === 600)return false
     console.log(rpmDisplay.innerHTML = rpm -= 100);
     console.log(windOnFuel.innerHTML = fuel -= 0.5);
     console.log(displayRange.innerHTML = ++ range);
}
low()