function checkAnswer() {

let question1 = document.quiz.question1.value;
let question2 = document.quiz.question2.value;
let question3 = document.quiz.question3.value;

let correctAnswers = 0;

if (question1 == "Labcabincalifornia")
{
correctAnswers++;
}

if (question2 == "Kurt Cobain")
{
correctAnswers++;
}

if (question3 == "Lil Wayne")
{
correctAnswers++;
}

document.getElementById("number_correct").innerHTML = "You got " + correctAnswers + " correct.";

}