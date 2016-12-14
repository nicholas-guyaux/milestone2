// 1. Ask the user 20 questions and get their input and store as score
document.getElementById("quiz-button").onclick = function() {checkAnswers()};

checkAnswers = function(data)
{
  // 2. Keep track of the number of questions that are answered correctly
  var total = checkAnswer1() + checkAnswer2() + checkAnswer3() + checkAnswer4() + checkAnswer5()
   + checkAnswer6() + checkAnswer7() + checkAnswer8() + checkAnswer9() + checkAnswer10()
   + checkAnswer11() + checkAnswer12() + checkAnswer13() + checkAnswer14() + checkAnswer15()
   + checkAnswer16() + checkAnswer17() + checkAnswer18() + checkAnswer19() + checkAnswer20();

  // 3. Write out a message to the user to let them know the number of questions that were correct
  alert("You answered " + total + " questions correctly.");

  // 4. Output a message to the element with a quiz-result id the user depending on their score
  //    All 5 correct: Complete Success

  return total;
}

function checkAnswer1()
{
  if(data.getElementById("q1c").checked) return 1;
  else return 0;
}

function checkAnswer2()
{
  if(data.getElementById("q2b").checked) return 1;
  else return 0;
}

function checkAnswer3()
{
  if(data.getElementById("q3b").checked) return 1;
  else return 0;
}

function checkAnswer4()
{
  if(data.getElementById("q4b").checked) return 1;
  else return 0;
}

function checkAnswer5()
{
  if(data.getElementById("q5c").checked) return 1;
  else return 0;
}

function checkAnswer6()
{
  if(data.getElementById("q6d").checked) return 1;
  else return 0;
}

function checkAnswer7()
{
  if(data.getElementById("q7a").checked) return 1;
  else return 0;
}

function checkAnswer8()
{
  if(data.getElementById("q8d").checked) return 1;
  else return 0;
}

function checkAnswer9()
{
  if(data.getElementById("q9a").checked) return 1;
  else return 0;
}

function checkAnswer10()
{
  if(data.getElementById("q10a").checked) return 1;
  else return 0;
}

function checkAnswer11()
{
  if(data.getElementById("q11c").checked) return 1;
  else return 0;
}

function checkAnswer12()
{
  if(data.getElementById("q12d").checked) return 1;
  else return 0;
}

function checkAnswer13()
{
  if(data.getElementById("q13c").checked) return 1;
  else return 0;
}

function checkAnswer14()
{
  if(data.getElementById("q14c").checked) return 1;
  else return 0;
}

function checkAnswer15()
{
  if(data.getElementById("q15b").checked) return 1;
  else return 0;
}

function checkAnswer16()
{
  if(data.getElementById("q16c").checked) return 1;
  else return 0;
}

function checkAnswer17()
{
  if(data.getElementById("q17a").checked) return 1;
  else return 0;
}

function checkAnswer18()
{
  if(data.getElementById("q18d").checked) return 1;
  else return 0;
}

function checkAnswer19()
{
  if(data.getElementById("q19c").checked) return 1;
  else return 0;
}

function checkAnswer20()
{
  if(data.getElementById("q20d").checked) return 1;
  else return 0;
}
