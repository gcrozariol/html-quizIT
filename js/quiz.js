  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  var questionSelected = [];

function buildQuiz(questions) {

  questions.sort();
  questionSelected = questions.slice(0, 10);

  const output = [];

  questionSelected.forEach( (value, index) => {

      const answers = [];

      for(choice in value.choices){
        answers.push(
          `<label>
            <input type="radio" name="question${index}" value="${choice}"> 
            ${choice}) ${value.choices[choice]}
          </label><br>`
        );
      }

      output.push(
        `<div class="slide">
          <div class="question"> ${value.question} </div>
          <div class="answers"> ${answers.join("")} </div>
        </div>`
      );
    }
  );

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

  resultsContainer.innerHTML = numCorrect + ' out of ' + questionSelected.length;
}

buildQuiz(questionsOpt1);
submitButton.addEventListener('click', showResults);
