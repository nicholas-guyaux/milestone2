// 1. Ask the user 20 questions and get their input and store as score
//document.getElementById("quiz-button").onclick = function() {checkAnswers()};
module.exports = {
  checkAnswers: function(data)
  {
    var radios = data.getElementsByTagName('input');
    var value = 0;
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value += parseInt(radios[i].value);
      }
    }
    console.log(value);
    return value;
    /*
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
    */
  }

};
/*
function checkAnswer1(data)
{
  if(data.getElementById("q1c").checked) return 1;
  else return 0;
}

function checkAnswer2(data)
{
  if(data.getElementById("q2b").checked) return 1;
  else return 0;
}

function checkAnswer3(data)
{
  if(data.getElementById("q3b").checked) return 1;
  else return 0;
}

function checkAnswer4(data)
{
  if(data.getElementById("q4b").checked) return 1;
  else return 0;
}

function checkAnswer5(data)
{
  if(data.getElementById("q5c").checked) return 1;
  else return 0;
}

function checkAnswer6(data)
{
  if(data.getElementById("q6d").checked) return 1;
  else return 0;
}

function checkAnswer7(data)
{
  if(data.getElementById("q7a").checked) return 1;
  else return 0;
}

function checkAnswer8(data)
{
  if(data.getElementById("q8d").checked) return 1;
  else return 0;
}

function checkAnswer9(data)
{
  if(data.getElementById("q9a").checked) return 1;
  else return 0;
}

function checkAnswer10(data)
{
  if(data.getElementById("q10a").checked) return 1;
  else return 0;
}

function checkAnswer11(data)
{
  if(data.getElementById("q11c").checked) return 1;
  else return 0;
}

function checkAnswer12(data)
{
  if(data.getElementById("q12d").checked) return 1;
  else return 0;
}

function checkAnswer13(data)
{
  if(data.getElementById("q13c").checked) return 1;
  else return 0;
}

function checkAnswer14(data)
{
  if(data.getElementById("q14c").checked) return 1;
  else return 0;
}

function checkAnswer15(data)
{
  if(data.getElementById("q15b").checked) return 1;
  else return 0;
}

function checkAnswer16(data)
{
  if(data.getElementById("q16c").checked) return 1;
  else return 0;
}

function checkAnswer17(data)
{
  if(data.getElementById("q17a").checked) return 1;
  else return 0;
}

function checkAnswer18(data)
{
  if(data.getElementById("q18d").checked) return 1;
  else return 0;
}

function checkAnswer19(data)
{
  if(data.getElementById("q19c").checked) return 1;
  else return 0;
}

function checkAnswer20(data)
{
  if(data.getElementById("q20d").checked) return 1;
  else return 0;
}
*/
