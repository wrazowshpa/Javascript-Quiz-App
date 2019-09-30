let questionCount = 0;
let amountWalkAway = 0;
let ans;
let timedOut = 0;
let rand;
let record = [];
let status = 0;

let quiz = document.querySelector("#quiz");
let quizQandA = document.querySelector("#quizQandA");
let question = document.querySelector("#question");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let next = document.querySelector("#next");
let bankAmount = document.querySelector("#bankAmount");
let resultDiv = document.querySelector("#resultDiv");
let result = document.querySelector("#result");
let replay = document.querySelector("#replay");
let button1 = document.querySelector("#idButton1");
let button2 = document.querySelector("#idButton2");
let button3 = document.querySelector("#idButton3");
let button4 = document.querySelector("#idButton4");
let bankTracker = document.querySelector("#bankTracker");
let bankAmountTracker = document.querySelectorAll(".bankAmountTracker");
let bank = document.querySelector("#bank");
let bankAmountTrackerRound2 = document.querySelectorAll(".bankAmountTrackerRound2");
let bankTrackerRound2 = document.querySelector("#bankTrackerRound2");


let tracker;
let countDown;
let secsInputRoundOne = 120;
let secsInputRoundTwo = 90;
let secsInputRoundThree = 60;
let secondsRound1 = secsInputRoundOne;
let secondsRound2 = secsInputRoundTwo;
let secondsRound3 = secsInputRoundThree;
let timer;
let roundIn = 0;
let bankCounter = 0;
let bankCounterRound2 =0;
let bankSavings = 0;
let roundTracker = 1;
let killTimer = 0;

function setQuestion(qCount, rand){
	let ques = arrayQuestions[rand];
	question.innerHTML = ques.questions;
	option1.innerHTML = ques.optionA;
	option2.innerHTML = ques.optionB;
	option3.innerHTML = ques.optionC;
	option4.innerHTML = ques.optionD;
}

function defaultOptionColors() {
	button1.style.backgroundColor = "#e6f3ff";
	button2.style.backgroundColor = "#e6f3ff";
	button3.style.backgroundColor = "#e6f3ff";
	button4.style.backgroundColor = "#e6f3ff";
}

function getQuestion(qCount, rand){
	setQuestion(qCount,rand);
	defaultOptionColors();
}

function setCorrect(){
	if (bankCounter >= bankAmountTracker.length) {
		bankCounter--;
	}
	if (bankCounter < bankAmountTracker.length) {
		bankAmountTracker[bankCounter].style.backgroundColor = "#1aff1a";
	}
}

function setWrong(){
	bankAmountTracker[bankCounter].style.backgroundColor = "#99ccff";
	bankCounter = 0;
	bankAmountTracker[bankCounter].style.backgroundColor = "#1aff1a";
}

function setCorrectRound2(){
	if (bankCounterRound2 >= bankAmountTrackerRound2.length) {
		bankCounterRound2--;
	}
	if (bankCounterRound2 < bankAmountTrackerRound2.length) {
		bankAmountTrackerRound2[bankCounterRound2].style.backgroundColor = "#1aff1a";
	}
}

function setWrongRound2(){
	bankAmountTrackerRound2[bankCounterRound2].style.backgroundColor = "#99ccff";
	bankCounterRound2 = 0;
	bankAmountTrackerRound2[bankCounterRound2].style.backgroundColor = "#1aff1a";
}
replay.addEventListener("click", replayGame);

function replayGame(){
	window.location.reload();
}

function finalResult(){
	if(bankSavings > 0){
		result.innerHTML = "Congratulations you win <br/>$" +bankSavings+"";
	}
	else{
		result.innerHTML = "Sorry you don't win any money, try again?";
	}
}

function setResultPage(){
	quizQandA.style.display = "none";
	bankTrackerRound2.style.display = "none";
	resultDiv.style.display = "block";
	bankAmount.innerHTML = "Game Complete";
	timer.innerHTML = +"0";
	finalResult();
}

function randomIndexGenerator() {
	while(status == 0) {
		rand = Math.floor(Math.random() * arrayQuestions.length);
		if(rand !== arrayQuestions.length) {
			//run through record array to find if its unique
			for(let i=0; i<record.length; i++) {
				if(rand === record[i]) {
					break;
				}
				
				else if(i == record.length - 1) {
					record[questionCount] = rand;
					status = 1;
				}
			}
		}
	}
	status = 0;

	return rand;
}


function $(id) {
	return document.getElementById(id);
}

function startTimerRound1(secs1, elem){
	timer = $(elem);
	timer.innerHTML = +secs1+ " seconds left for ROUND 1";

	if(bankSavings >= 500000){
		alert("You are now in ROUND 2!");
		bankTrackerRound2Function();
		roundTracker++;
		startTimerRound2(secondsRound2,"timer");
		return;
		}

	if(secs1 <= 0){
		alert("You are now in ROUND 2!");
		bankTrackerRound2Function();
		roundTracker++;
		startTimerRound2(secondsRound2, elem);
		return;
		}
	secs1 --;
	countDown = setTimeout('startTimerRound1('+secs1+',"'+elem+'")',1000);
}

function startTimerRound2(secs2, elem){
	timer = $(elem);
	timer.innerHTML = +secs2+ " seconds for ROUND 2 left";

	if (bankSavings >= 1000000) {
		alert("You are now in ROUND 3! SUDDEN DEATH");
		bankTrackerRound3Function();
		roundTracker++;
		startTimerRound3(secondsRound3, "timer");
		return;
		}

	if(secs2 <= 0){
		if (bankSavings > 0) {
			alert("You are now in ROUND 3! SUDDEN DEATH");
			bankTrackerRound3Function();
			roundTracker++;
			startTimerRound3(secondsRound3, "timer");
			return;
		}
		else{
			setResultPage();
		}
	}
	secs2 --;
	countDown = setTimeout('startTimerRound2('+secs2+',"'+elem+'")',1000);
}

function startTimerRound3(secs3, elem){
	timer = $(elem);
	timer.innerHTML = +secs3+ " seconds for ROUND 3 left";

	if (killTimer == 1) {
		secs3 = 0;
		timer.innerHTML = +secs3;
		return;
	}
	if(secs3 <= 0){
		timer.innerHTML = +secs3;
		setResultPage();
		return;
	}
	secs3 --;
	countDown = setTimeout('startTimerRound3('+secs3+',"'+elem+'")',1000);
}


option1.addEventListener("click",optionSelect);
option2.addEventListener("click",optionSelect);
option3.addEventListener("click",optionSelect);
option4.addEventListener("click",optionSelect);

function optionSelect(e) {
	let parentEl = e.target.parentElement;
	parentEl.style.backgroundColor = "rgb(26, 255, 26)";
	
	switch(e.target.id) {
		case "option1": button2.style.backgroundColor = "#e6f3ff";
						button3.style.backgroundColor = "#e6f3ff";
						button4.style.backgroundColor = "#e6f3ff";
						break;

		case "option2": button1.style.backgroundColor = "#e6f3ff";
						button3.style.backgroundColor = "#e6f3ff";
						button4.style.backgroundColor = "#e6f3ff";
						break;

		case "option3": button1.style.backgroundColor = "#e6f3ff";
						button2.style.backgroundColor = "#e6f3ff";
						button4.style.backgroundColor = "#e6f3ff";
						break;

		case "option4": button1.style.backgroundColor = "#e6f3ff";
						button2.style.backgroundColor = "#e6f3ff";
						button3.style.backgroundColor = "#e6f3ff";
						break;
	}
	
	ans = parseInt(e.target.id.replace("option",""),10);
}

next.addEventListener("click", nextQuestion);


function nextQuestion() {

	if(button1.style.backgroundColor !== "rgb(26, 255, 26)" && 
		button2.style.backgroundColor !== "rgb(26, 255, 26)" && 
		button3.style.backgroundColor !== "rgb(26, 255, 26)" && 
		button4.style.backgroundColor !== "rgb(26, 255, 26)") {
		alert("Please select an option");
		return;
	}
	else {
		
		if(ans == arrayQuestions[rand].correctAnswer) {
			if (roundTracker == 1) {
				bankAmountTracker[bankCounter].style.backgroundColor = "#99ccff";
				bankCounter++;
				setCorrect();
				getQuestion(++questionCount, randomIndexGenerator());
			}
			if (roundTracker == 2) {
				bankAmountTrackerRound2[bankCounterRound2].style.backgroundColor = "#99ccff";
				bankCounterRound2++;
				setCorrectRound2();
				getQuestion(++questionCount, randomIndexGenerator());
			}
			if (roundTracker == 3){
				getQuestion(++questionCount, randomIndexGenerator());
			}
		}
		else {
			if (roundTracker == 3) {
				bankSavings = 0;
				killTimer = 1;
				setResultPage();
			}
			setWrong();
			setWrongRound2();
			getQuestion(++questionCount, randomIndexGenerator());
		}	
	}
}



bank.addEventListener("click", saveBank);

function saveBank(){

	if (parseInt(bankAmountTracker[bankCounter].id,10) > 0 && roundTracker == 1) {
		bankSavings += parseInt(bankAmountTracker[bankCounter].id,10);
		bankAmount.innerHTML = "$" +bankSavings;
	}

	if (parseInt(bankAmountTrackerRound2[bankCounterRound2].id.replace("option",""),10) > 0 && roundTracker == 2) {
			bankSavings += parseInt(bankAmountTrackerRound2[bankCounterRound2].id.replace("option",""),10);
			bankAmount.innerHTML = "$" +bankSavings;
	}

	setWrong();
	setWrongRound2();
}

function bankTrackerRound2Function(){
	bankTracker.style.display = "none";
	bankTrackerRound2.style.display = "block";

}

function bankTrackerRound3Function(){
	bankTrackerRound2.style.display = "none";
}

replay.addEventListener("click", replayGame);

function replayGame(){
	window.location.reload();
}

rand = Math.floor(Math.random() * arrayQuestions.length);

while(rand == arrayQuestions.length){
	rand = Math.floor(Math.random()* arrayQuestions.length);
}

record[0] = rand;

window.onload = startTimerRound1(secondsRound1, "timer");
window.onload = getQuestion(questionCount, rand);
