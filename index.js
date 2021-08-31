let readLineSync = require('readline-sync');
let score = 0;

const questionLevel1 = [
    {
    question: "1. Who is my favorite superhero? ",
    answer: "ironman"
    },
    {
      question: "2. Which is my favorite sad song? ",
      answer: "Alvida"
    },
    {
      question: "3. Where is my hometown? ",
      answer: "Varanasi"
    },
    {
      question: "4. In which city do I live? ",
      answer: "Pune"
    }
];

const questionLevel2 = [
    {
      question: "1. In which year I was born? ",
      answer: "1993"
    },
    {
      question: "2. Where do I work? ",
      answer: "Crest Data Systems"
    },
    {
      question: "3. Which is my favorite place for vacation? ",
      answer: "shimla"
    },
    {
      question: "4.What's my age? ",
      answer: "28"
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


