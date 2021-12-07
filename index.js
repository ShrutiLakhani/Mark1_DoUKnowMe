var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("May I know your name Please? ");
console.log("Welcome " + userName + "!!!" + "Let's Play - Do you know me? ");
//Define Fucntions

function play(question, answer)
{
var userAnswer = readlineSync.question(question);
 if (userAnswer === answer)
 {
   console.log("You are Right");
   console.log("-------------");
   score = score + 1;
 }
 else
 {
   console.log("You are Wrong");
   console.log("-------------");
   score = score - 1;
 }
 
}
//Calling a function 
// play("Where do I live? ", "Faridabad");
// play("what are you doing? ", "Learning"); 
// console.log("Yay!Your total score is:" + score);

// *Make it Generic
var questionOne = {
question: "Where do I live? ",
answer: "Faridabad"
}
var questionTwo = {
  question: "What am I Learning? ",
  answer: "Coding"
}
var questionThree = {
question: "What have I started with? ",
answer: "Javascript"
}
var questionFour = {
question: "Company I am currently working with? ",
answer: "DXC"
}
var questionFive = {
question: "My Dream Company? ",
answer: "Microsoft"
}
var questionSix = {
question: "Which is my favorite color? ",
answer: "Blue"
}
var questionSeven = {
question: "Which is my favorite food? ",
answer: "Chicken"
}
var questionEight = {
question: "Which is my favorite destination in India? ",
answer: "Goa"
}
var questionNine = {
question: "Which is my favorite destination outside India? ",
answer: "America"
}
var questionTen = {
question: "Which is my favorite car? ",
answer: "Ferrari"
}
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];
for (var i=0;i<questions.length;i++)
{
  var currentQues = questions[i];
  play(currentQues.question, currentQues.answer);
}
console.log("Yay!Your Total Score is:" + score);