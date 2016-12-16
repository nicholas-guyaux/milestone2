// 1. Ask the user 20 questions and get their input and store as score
//document.getElementById("quiz-button").onsubmit = function() {checkAnswers()};

checkAnswers=function(data)
{
  // 2. Keep track of the number of questions that are answered correctly
  var total = checkAnswer1(data) + checkAnswer2(data) + checkAnswer3(data) + checkAnswer4(data) + checkAnswer5(data)
   + checkAnswer6(data) + checkAnswer7(data) + checkAnswer8(data) + checkAnswer9(data) + checkAnswer10(data)
   + checkAnswer11(data) + checkAnswer12(data) + checkAnswer13(data) + checkAnswer14(data) + checkAnswer15(data)
   + checkAnswer16(data) + checkAnswer17(data) + checkAnswer18(data) + checkAnswer19(data) + checkAnswer20(data);

  return total;

};

function checkAnswer1(data)
{
  if(data.q1)return parseInt(data.q1.value, 10);
  else return 0;
}

function checkAnswer2(data)
{
  if(data.q2)return parseInt(data.q2.value, 10);
  else return 0;
}

function checkAnswer3(data)
{
  if(data.q3)return parseInt(data.q3.value, 10);
  else return 0;
}

function checkAnswer4(data)
{
  if(data.q4)return parseInt(data.q4.value, 10);
  else return 0;
}

function checkAnswer5(data)
{
  if(data.q5)return parseInt(data.q5.value, 10);
  else return 0;
}

function checkAnswer6(data)
{
  if(data.q6)return parseInt(data.q6.value, 10);
  else return 0;
}

function checkAnswer7(data)
{
  if(data.q7)return parseInt(data.q7.value, 10);
  else return 0;
}

function checkAnswer8(data)
{
  if(data.q8)return parseInt(data.q8.value, 10);
  else return 0;
}

function checkAnswer9(data)
{
  if(data.q9)return parseInt(data.q9.value, 10);
  else return 0;
}

function checkAnswer10(data)
{
  if(data.q10)return parseInt(data.q10.value, 10);
  else return 0;
}

function checkAnswer11(data)
{
  if(data.q11)return parseInt(data.q11.value, 10);
  else return 0;
}

function checkAnswer12(data)
{
  if(data.q12)return parseInt(data.q12.value, 10);
  else return 0;
}

function checkAnswer13(data)
{
  if(data.q13)return parseInt(data.q13.value, 10);
  else return 0;
}

function checkAnswer14(data)
{
  if(data.q14)return parseInt(data.q14.value, 10);
  else return 0;
}

function checkAnswer15(data)
{
  if(data.q15)return parseInt(data.q15.value, 10);
  else return 0;
}

function checkAnswer16(data)
{
  if(data.q16)return parseInt(data.q16.value, 10);
  else return 0;
}

function checkAnswer17(data)
{
  if(data.q17)return parseInt(data.q17.value, 10);
  else return 0;
}

function checkAnswer18(data)
{
  if(data.q18)return parseInt(data.q18.value, 10);
  else return 0;
}

function checkAnswer19(data)
{
  if(data.q19)return parseInt(data.q19.value, 10);
  else return 0;
}

function checkAnswer20(data)
{
  if(data.q20)return parseInt(data.q20.value, 10);
  else return 0;
}
