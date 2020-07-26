'use strict';

var name = prompt("what is your name?");
alert("Heloo Welcome to my Game," + name);


var score =0;
var count =0;
var answer = 2;
for (var i=0;i<5;i++){
 var guess = prompt('guess my lucky number?');
 count++
 if(count === 4 ){ 
   alert('the write answer ' + answer)
   break;
 }
  if(answer === parseInt(guess)){
    score++
    console.log(score)
    alert('yes mylucky 2');
   
   
        break;

  }else if(guess > answer){
    alert('too high');
    
  }else if(guess < answer){
    alert('too low')
 
  }
   
  }
  
  var questions =[
  
   {
     prompt: "do you think i am a boy?\n(yes)\n\(no)",
     answer: "yes"
   },
   {
     prompt: "do you think i have a sistor?\n(yes)\n\(no)",
    answer: "yes"
  },
  {
    prompt: "do you think i am Graduated?\n(yes)\n\(no)",
    answer: "yes"
  },
  {
    prompt: "do you think i am from out of the states ?\n(yes)\n\(no)",
    answer: "yes",
    answerTwo: "y"
  },
  {
    prompt: "do you think i love soccer?\n(yes)\n\(no)",
    answer: "yes"
  },
 {
    prompt: "what color do i like?\n (red)\n\ (blue)\n\ (green)",
    answer: "green" 
    
  },

]
 
 for(var i=0; i < questions.length; i++){
   var response = window.prompt(questions[i].prompt);
   if(response === questions[i].answer || response === questions[i].answerTwo){
     score++;
     alert("correct");
   }else {
     alert('wrong')
   }
 }




 alert( "Thank you for visiting my site," +  name  +   " you got " + score + "/" +questions.length );