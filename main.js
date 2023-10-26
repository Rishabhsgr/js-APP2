var readlineSync = require ("readline-sync");

var score = 0;

var highScores = [
  {
    name : "tarun",
    score : "5"
  },{
    name : "bunny",
    score : "3"
  }
]

var questions = [{
  question : "Whats is my home town",
  answer : "delhi"
  },{
  question : "Am i older than 25",
  answer : "yes"
  },{
  question: "Am i single ?",
  answer : "no"
  },{
  question: "Do i like bikes ?",
  answer : "yes"
  },{
  question: "Did i made these question in array of objects ?",
  answer : "yes"
}];

function welcome(){
var userName = readlineSync.question("What's you name ?\n")
console.log("");
console.log("Welcome "+userName+" to my ##DO YOU KNOW ME GAME##");
console.log("");}

function play(question, answer){
  var userAns = readlineSync.question(question+"\n");
  if (userAns === answer){
    console.log("you are right");
    score=score+1;
  }
  else{
    console.log("wrong");
  }
  console.log("");
  console.log("____________________________________________________");
}


function game(){
for(var i=0 ; i<questions.length ; i++){
  var curqus = questions[i];
    play(curqus.question,curqus.answer)
 }
}

function showScore(){
  console.log("");
  console.log(" yay you scored = ",score);
  console.log("")
  console.log("check out the other high scores, if you ping me i'll update yours too");
  highScores.map(score => console.log(score.name, " : ", score.score))
}

welcome();
game();
showScore();