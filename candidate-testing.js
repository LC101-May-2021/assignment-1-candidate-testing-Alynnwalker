const input = require('readline-sync');
console.clear()

///test comment
///----------------------------------------------------------------------
// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName // 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let candidateName= "";
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space?" , "True or false: 5 kilometer == 5000 meters?", "(5+3)/2*10=", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", "What is the minimum crew size for the ISS?" ];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];

///----------------------------------------------------------------------
  // TODO 1.1b: Ask for candidate's name //
function askForName() {
candidateName = input.question ( "Candidate (user) enter name: ");
console.clear ()
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
function askQuestion() {
for (let i = 0 ; i <questions.length ; i++){
candidateAnswer = input.question(questions[i]);
//candidateAnswer = candidateAnswer.toLowerCase()

candidateAnswers.push (candidateAnswer);
console.log (); 
}

}
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let minimumScore = 80
function gradeQuiz(candidateAnswers) {
  let points = 0
  candidateAnswer = candidateAnswer.toLowerCase()
for (let i = 0 ; i <questions.length ; i++){
  //candidateAnswer = candidateAnswer.toLowerCase()
  //if (candidateAnswers.toLowerCase[i] == correctAnswers[i]){
  if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
 // if (candidateAnswer[i] == correctAnswers[i]){
     points = points+1;
}else {
  points = points
}

console.log (questions[i])
 console.log (` 
    Your Answer: ${candidateAnswers[i]} 
    Correct Answer:  ${ correctAnswers[i]}
    `);
}
  let grade = ((points / questions.length)*100);
let result = ("Pending");

if ( grade >= minimumScore){
  result = ("Pass");
} else {
  result =("FAILED");
}
console.log (`>>>> Overall Grade: ${grade}% (${points} of ${questions.length} correct) <<<<`);
console.log (`>>>> Status ${result} <<<<`);
  return grade;
}
 // TODO 1.1c: Ask for candidate's name //
function runProgram() {
  askForName();
  askQuestion();
  console.clear()
  console.log("Candidate Name: " , candidateName)
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};