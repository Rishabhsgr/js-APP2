var readlineSync = require ("readline-sync");

var score = 0;

var questions = [{
  qus : "Can H2R reach a top speed of 400?\n",
  ans : "yes"
},{
  qus : "What is the colour of all kawasaki bikes ?\n",
  ans : "green"
},{
  qus : "Is H2R road legal ?\n",
  ans : "no"
},{
  qus : "Ducati panigale is a dry clutch bike ?\n",
  ans : "yes"
},{
  qus : "What is the colour of ducati ?\n",
  ans : "red"
}]

function welcome(){
  console.log("Welcome to ******motorcycle quiz******");
  console.log("");
  var userName = readlineSync.question("What is your name ?");
  console.log("");
}

function play(qus,ans){
    var userAns = readlineSync.question(qus)
  if(userAns.toUpperCase() === ans.toUpperCase()){
    console.log("you are right");
    score = score + 1;
  }
  else {
    console.log("wrong")
  }
  console.log("");
  console.log("current score = ",score);
  console.log("");
  console.log("-----------------------------------------------");
}

function game(){
  for(var i=0 ; i<questions.length ; i++){
    var currentqus = questions[i];
    play(currentqus.qus,currentqus.ans)
  }
}

welcome();
game();
console.log("");
console.log("your final socre is = ",score);
console.log("Thank you for playing");