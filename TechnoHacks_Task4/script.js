const quizData = [
{
question:"Which language is used for styling web pages?",
options:["HTML","Python","CSS","Java"],
answer:"CSS"
},
{
question:"Which tag is used to create a hyperlink in HTML?",
options:["<img>","<a>","<link>","<p>"],
answer:"<a>"
},
{
question:"Which language is used to make web pages interactive?",
options:["CSS","C++","JavaScript","SQL"],
answer:"JavaScript"
},
{
question:"Which company developed Java?",
options:["Google","Sun Microsystems","Microsoft","Apple"],
answer:"Sun Microsystems"
},
{
question:"Which CSS property changes text color?",
options:["font-color","text-style","color","background"],
answer:"color"
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = "";

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

selectedAnswer="";

const current=quizData[currentQuestion];

question.innerText=current.question;

options.innerHTML="";

current.options.forEach(option=>{

const btn=document.createElement("button");

btn.innerText=option;

btn.classList.add("option");

btn.onclick=()=>{

selectedAnswer=option;

document.querySelectorAll(".option").forEach(b=>b.style.background="white");

btn.style.background="#93c5fd";

};

options.appendChild(btn);

});

}

nextBtn.onclick=()=>{

if(selectedAnswer===""){
alert("Please select an option.");
return;
}

if(selectedAnswer===quizData[currentQuestion].answer){
score++;
}

currentQuestion++;

if(currentQuestion<quizData.length){

loadQuestion();

}else{

document.getElementById("quiz").classList.add("hidden");

document.getElementById("result").classList.remove("hidden");

document.getElementById("score").innerText=
`${score} / ${quizData.length}`;

}

};

function restartQuiz(){

currentQuestion=0;
score=0;

document.getElementById("quiz").classList.remove("hidden");

document.getElementById("result").classList.add("hidden");

loadQuestion();

}

loadQuestion();