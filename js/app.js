//'use strict';

var name = prompt("what is your name?");
console.log("Heloo Welcome to my Game," + name);

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
    answer: "yes"
  },
  {
    prompt: "do you think i love soccer?\n(yes)\n\(no)",
    answer: "yes"
  },
  

  
]


var score =0;

 
 
 
 for(var i=0; i < questions.length; i++){
   var response =window.prompt(questions[i].prompt);
   if(response == questions[i].answer){
     score++;
     alert("correct");
   }else {
     alert('wrong')
   }
 }

 alert( "Heloo Welcome to my Game," +  name  +   "you got" + score + "/" +questions.length );