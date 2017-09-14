  const myQuestions = [
    {
      question: "Who is the strongest?",
      answers: {
        a: "Superman",
        b: "The Terminator",
        c: "Waluigi, obviously"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the best site ever created?",
      answers: {
        a: "SitePoint",
        b: "Simple Steps Code",
        c: "Trick question; they're both the best"
      },
      correctAnswer: "c"
    },
    {
      question: "Where is Waldo really?",
      answers: {
        a: "Antarctica",
        b: "Exploring the Pacific Ocean",
        c: "Sitting in a tree",
        d: "Minding his own business, so stop asking"
      },
      correctAnswer: "d"
    }
  ];

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');


function buildQuiz() {

  const output = [];

  myQuestions.forEach( (value, index) => {

      const answers = [];

      for(letter in value.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${index}" value="${letter}"> 
            ${letter}) ${value.answers[letter]}
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

  myQuestions.forEach( (value, index) => {

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

  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
