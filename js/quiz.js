const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizTitle = document.getElementById('quiz-title');
const typeTest = getURLParameter('test');

var questionSelected = [];

function buildQuiz(questions) {

  questions.sort();
  questionSelected = questions.slice(0, 10);

  const output = [];
  var cont = 1;

  questionSelected.forEach( (value, index) => {

      const answers = [];

      for(choice in value.choices){
        answers.push(
          `<label>
            <input type="radio" name="question${index}" value="${choice}"> 
            ${choice}) ${value.choices[choice]}
          </label>
          <br>`
        );
      }

      output.push(
        `<div class="slide">
          <div class="question"><h1>`+cont+`. ${value.question}<h1/></div>
          <br>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
      cont++;
    }
  );

  quizTitle.innerHTML = decodeURIComponent(typeTest) + ' Test';
  quizContainer.innerHTML = output.join('');
}

function showResults() {

  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  questionSelected.forEach( (value, index) => {

    const answerContainer = answerContainers[index];
    const selector = 'input[name=question'+index+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer===value.correctAnswer) {
      numCorrect++;
      answerContainers[index].style.color = 'lightgreen';
      
    } else {
      answerContainers[index].style.color = 'red';
    }
    
  });

  document.getElementById('quiz-body').remove();

  var msg = '<div style="width:40%; margin:0% 30%; text-align:left;">';
      msg += 'First name: <h1>' + getURLParameter('first_name') + '</h1>';
      msg += 'Last name: <h1>' + getURLParameter('last_name') + '</h1>';
      msg += 'Email: <h1>' + getURLParameter('email') + '</h1>';
      msg += 'Phone number: <h1>' + getURLParameter('phone_number') + '</h1>';
      msg += 'Address: <h1>' + getURLParameter('address') + '</h1>';
      msg += '<br><h1 style="text-align:center;">Score ' + numCorrect + '/' + questionSelected.length; + '</h1>';
      msg += "</div>";

  if (numCorrect >= 8) {
    msg += 'You have successfully passed the test. You are now certified in ' + typeTest + '. Where ' + typeTest + ' is the certification topic you have chosen for this assignment.';
  } else {
    msg += 'Unfortunately you did not pass the test. <br><br> Please try again later!';
    msg += '<br><button onclick=\'location.href="index.html"\'>Try again</button>';
  }

  resultsContainer.innerHTML = msg;
}

function getURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
    }
  }
}

if(typeTest == 'C') {
  buildQuiz(questionsOpt1);
} else {
  buildQuiz(questionsOpt2);
}
submitButton.addEventListener('click', showResults);
