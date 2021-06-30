let readLineSync = require('readline-sync');
let score = 0;

const questionLevel1 = [
    {
    question: "1.Who is my favorite superhero? ",
    answer: "ironman"
    },
    {
      question: "2.Which is my favorite sad song? ",
      answer: "Alvida"
    },
    {
      question: "3.What is capital of India? ",
      answer: "Delhi"
    },
    {
      question: "4.What is capital of Afghanistan? ",
      answer: "Kabul"
    }
];

const questionLevel2 = [
    {
      question: "1.We smell with our? ",
      answer: "nose"
    },
    {
      question: "2.What do you call the person who brings a letter to your home from post office? ",
      answer: "postman"
    },
    {
      question: "3. In which direction does the sun rise?  ",
      answer: "east"
    },
    {
      question: "4.  How many letters are there in the English alphabet? ",
      answer: "26"
    }
];

console.log("For all correct answer +4 and wrong answers -1");
console.log("Welcome to level 1");

function quiz(question, answer) {
  let userAnswer = readLineSync.question(question);

  if (answer.toLowerCase() === userAnswer.toLowerCase()) {
    score= score+4;
    console.log('right!');
    console.log('current score: ', score);
  } else {
    score--;
    console.log('wrong!');
    console.log('current score: ', score);
  }
}

function loopOverQuestions(questionObject) {
  questionObject.forEach((item) => {
    quiz(item.question, item.answer);
  })
}

loopOverQuestions(questionLevel1);

if (score === Object.keys(questionLevel1).length*4) {
  console.log("Congrats! You passed level 1");
  console.log("Welcome to level 2!");
  loopOverQuestions(questionLevel2);
  console.log("Quiz Over!");
  console.log("Your final score is ", score);
} 


