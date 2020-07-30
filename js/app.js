'use strict';


var score = 0;

function greeting() {

  var name = prompt('what is your name?');
  alert('Heloo Welcome to my Game,' + name);
}
greeting();

console.log('check 1')

function quiz() {
  console.log('check two')
  var questions = [

    {
      prompt: 'do you think i am a boy?\n(yes)\n(no)',
      answer: 'yes',
    },
    {
      prompt: 'do you think i have a sistor?\n(yes)\n(no)',
      answer: 'yes'
    },
    {
      prompt: 'do you think i am Graduated?\n(yes)\n(no)',
      answer: 'yes'
    },
    {
      prompt: 'do you think i am from out of the states ?\n(yes)\n(no)',
      answer: 'yes',
      answerTwo: 'y'
    },
    {
      prompt: 'do you think i love soccer?\n(yes)\n(no)',
      answer: 'yes'
    }


  ];

  for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response === questions[i].answer || response === questions[i].answerTwo) {
      score++;
      alert('correct');
    } else {
      alert('wrong');
    }
  }
}
  quiz();

  function questionsOne() {

    var score = 0;
    var count = 6;
    var answer = 2;

    for (var i = 0; i < 5; i++) {
      var guess = prompt('guess my lucky number?');
      count++;
      if (count === 4) {
        alert('the write answer ' + answer);
        break;
      }
      if (answer === parseInt(guess)) {
        score++;
        console.log(score);
        alert('yes mylucky 2');


        break;

      } else if (guess > answer) {
        alert('too high');

      } else if (guess < answer) {
        alert('too low');

      }

    }
  }
  questionsOne();


  var color = prompt('Guess my top four color do i like? ').toLowerCase();
  var colorLike = ['white', 'red', 'belu', 'black'];
  var attempts = 6;
  var answeredCorrectly = false;

  while (attempts > 0 && !answeredCorrectly) {
    attempts--;
    for (var i = 0; i < colorLike.length; i++) {
      if (color === colorLike[i]) {
        alert('great guess that is the correct answer');
        score++;
        answeredCorrectly = true;
      }
    }
    if (attempts > 0 && !answeredCorrectly) {
      color = prompt('incirrect guess again').toLowerCase();
    }
  }
  if (attempts === 0 && !answeredCorrectly) {
    alert('thanks for playing,you are out of guesses here are the correcct answer ');
  }



  alert('Thank you for visiting my site,' + name + ' you got ' + score + '/' + questions.length);
