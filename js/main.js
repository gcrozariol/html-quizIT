var questionsSwift = [];

function addQuestionSwift(valueQuestion, arrChoices, valueAnswer) {
  questionsSwift.push({
    question: valueQuestion,
    choices: arrChoices,
    answer: valueAnswer
  });
}

addQuestionSwift("Which of the following framework is not used in iOS ?", 
	["UIKit Framework","AppKit Framework","Foundation Framework", "CoreMotion Framework"], 0);