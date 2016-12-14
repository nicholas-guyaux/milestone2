// 1. Ask the user 20 questions and get their input and store as score
//document.getElementById("quiz-button").onclick = function() {checkAnswers()};

checkAnswers = function(data)
{
  // 2. Keep track of the number of questions that are answered correctly
  var total = checkAnswer1(data) + checkAnswer2(data) + checkAnswer3(data) + checkAnswer4(data) + checkAnswer5(data)
   + checkAnswer6(data) + checkAnswer7(data) + checkAnswer8(data) + checkAnswer9(data) + checkAnswer10(data)
   + checkAnswer11(data) + checkAnswer12(data) + checkAnswer13(data) + checkAnswer14(data) + checkAnswer15(data)
   + checkAnswer16(data) + checkAnswer17(data) + checkAnswer18(data) + checkAnswer19(data) + checkAnswer20(data);

  // 3. Write out a message to the user to let them know the number of questions that were correct
  alert("You answered " + total + " questions correctly.");

  // 4. Output a message to the element with a quiz-result id the user depending on their score
  //    All 5 correct: Complete Success

  return total;
}

function checkAnswer1(data)
{
  if(data.q1c) return 1;
  else return 0;
}

function checkAnswer2(data)
{
  if(data.q2b) return 1;
  else return 0;
}

function checkAnswer3(data)
{
  if(data.q3b) return 1;
  else return 0;
}

function checkAnswer4(data)
{
  if(data.q4b) return 1;
  else return 0;
}

function checkAnswer5(data)
{
  if(data.q5c) return 1;
  else return 0;
}

function checkAnswer6(data)
{
  if(data.q6d) return 1;
  else return 0;
}

function checkAnswer7(data)
{
  if(data.q7a) return 1;
  else return 0;
}

function checkAnswer8(data)
{
  if(data.q8d) return 1;
  else return 0;
}

function checkAnswer9(data)
{
  if(data.q9a) return 1;
  else return 0;
}

function checkAnswer10(data)
{
  if(data.q10a) return 1;
  else return 0;
}

function checkAnswer11(data)
{
  if(data.q11c) return 1;
  else return 0;
}

function checkAnswer12(data)
{
  if(data.q12d) return 1;
  else return 0;
}

function checkAnswer13(data)
{
  if(data.q13c) return 1;
  else return 0;
}

function checkAnswer14(data)
{
  if(data.q14c) return 1;
  else return 0;
}

function checkAnswer15(data)
{
  if(data.q15b) return 1;
  else return 0;
}

function checkAnswer16(data)
{
  if(data.q16c) return 1;
  else return 0;
}

function checkAnswer17(data)
{
  if(data.q17a) return 1;
  else return 0;
}

function checkAnswer18(data)
{
  if(data.q18d) return 1;
  else return 0;
}

function checkAnswer19(data)
{
  if(data.q19c) return 1;
  else return 0;
}

function checkAnswer20(data)
{
  if(data.q20d) return 1;
  else return 0;
}
