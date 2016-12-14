// 1. Ask the user 20 questions and get their input and store as score
document.getElementById("quiz-button").onclick = function() {checkAnswers()};

function checkAnswers()
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
  var theDiv = document.getElementById("quiz-result");

  if(total == 5)
  {
    var content = document.createTextNode("Complete Success");
  }
  //    3-4 correct: Almost Good Enough
  else if(total>=3)
  {
    var content = document.createTextNode("Almost Good Enough");
  }
  //    1-2 correct: Sitting on the Edge
  else if(total>=1)
  {
    var content = document.createTextNode("Sitting on the Edge");
  }
  //    0 correct: Ultimate failure
  else
  {
    var content = document.createTextNode("Ultimate failure");
  }
  theDiv.appendChild(content);
}

function checkAnswer1()
{
  if(document.getElementById("q1c").checked) return 1;
  else return 0;
}

function checkAnswer2()
{
  if(document.getElementById("q2b").checked) return 1;
  else return 0;
}

function checkAnswer3()
{
  if(document.getElementById("q3b").checked) return 1;
  else return 0;
}

function checkAnswer4()
{
  if(document.getElementById("q4b").checked) return 1;
  else return 0;
}

function checkAnswer5()
{
  if(document.getElementById("q5c").checked) return 1;
  else return 0;
}

function checkAnswer6()
{
  if(document.getElementById("q6d").checked) return 1;
  else return 0;
}

function checkAnswer7()
{
  if(document.getElementById("q7a").checked) return 1;
  else return 0;
}

function checkAnswer8()
{
  if(document.getElementById("q8d").checked) return 1;
  else return 0;
}

function checkAnswer9()
{
  if(document.getElementById("q9a").checked) return 1;
  else return 0;
}

function checkAnswer10()
{
  if(document.getElementById("q10a").checked) return 1;
  else return 0;
}

function checkAnswer11()
{
  if(document.getElementById("q11c").checked) return 1;
  else return 0;
}

function checkAnswer12()
{
  if(document.getElementById("q12d").checked) return 1;
  else return 0;
}

function checkAnswer13()
{
  if(document.getElementById("q13c").checked) return 1;
  else return 0;
}

function checkAnswer14()
{
  if(document.getElementById("q14c").checked) return 1;
  else return 0;
}

function checkAnswer15()
{
  if(document.getElementById("q15b").checked) return 1;
  else return 0;
}

function checkAnswer16()
{
  if(document.getElementById("q16c").checked) return 1;
  else return 0;
}

function checkAnswer17()
{
  if(document.getElementById("q17a").checked) return 1;
  else return 0;
}

function checkAnswer18()
{
  if(document.getElementById("q18d").checked) return 1;
  else return 0;
}

function checkAnswer19()
{
  if(document.getElementById("q19c").checked) return 1;
  else return 0;
}

function checkAnswer20()
{
  if(document.getElementById("q20d").checked) return 1;
  else return 0;
}
