const questions = [
	{
		question: "What is the capital of Pakistan?",
		answers: [
			{ text: "Islamabad", correct: true },
			{ text: "Peshawar", correct: false },
			{ text: "Karachi", correct: false },
			{ text: "Lahore", correct: false },
		],
	},
	{
		question: "Which planet is known as the Red Planet?",
		answers: [
			{ text: "Jupiter", correct: false },
			{ text: "Venus", correct: false },
			{ text: "Mars", correct: true },
			{ text: "Earth", correct: false },
		],
	},
	{
		question: "Who wrote 'Hamlet'?",
		answers: [
			{ text: "Mark Twain", correct: false },
			{ text: "William Shakespeare", correct: true },
			{ text: "Jane Austen", correct: false },
			{ text: "Charles Dickens", correct: false },
		],
	},
	{
		question: "What is the smallest continent?",
		answers: [
			{ text: "Antarctica", correct: false },
			{ text: "South America", correct: false },
			{ text: "Australia", correct: true },
			{ text: "Europe", correct: false },
		],
	},
	{
		question: "What is the square root of 64?",
		answers: [
			{ text: "10", correct: false },
			{ text: "6", correct: false },
			{ text: "12", correct: false },
			{ text: "8", correct: true },
		],
	},
	{
		question: "Which gas do plants absorb from the atmosphere?",
		answers: [
			{ text: "Hydrogen", correct: false },
			{ text: "Carbon Dioxide", correct: true },
			{ text: "Oxygen", correct: false },
			{ text: "Nitrogen", correct: false },
		],
	},
	{
		question: "What is the largest ocean on Earth?",
		answers: [
			{ text: "Atlantic Ocean", correct: false },
			{ text: "Indian Ocean", correct: false },
			{ text: "Pacific Ocean", correct: true },
			{ text: "Arctic Ocean", correct: false },
		],
	},
	{
		question: "Which country is famous for the Eiffel Tower?",
		answers: [
			{ text: "Germany", correct: false },
			{ text: "Italy", correct: false },
			{ text: "Spain", correct: false },
			{ text: "France", correct: true },
		],
	},
	{
		question: "How many continents are there on Earth?",
		answers: [
			{ text: "6", correct: false },
			{ text: "8", correct: false },
			{ text: "7", correct: true },
			{ text: "5", correct: false },
		],
	},
	{
		question: "Who painted the Mona Lisa?",
		answers: [
			{ text: "Vincent van Gogh", correct: false },
			{ text: "Leonardo da Vinci", correct: true },
			{ text: "Claude Monet", correct: false },
			{ text: "Pablo Picasso", correct: false },
		],
	},
	{
		question: "Which is the largest animal on Earth?",
		answers: [
			{ text: "Great White Shark", correct: false },
			{ text: "Elephant", correct: false },
			{ text: "Giraffe", correct: false },
			{ text: "Blue Whale", correct: true },
		],
	},
	{
		question: "Which language has the most native speakers?",
		answers: [
			{ text: "Mandarin Chinese", correct: true },
			{ text: "Spanish", correct: false },
			{ text: "English", correct: false },
			{ text: "Hindi", correct: false },
		],
	},
	{
		question: "What is the hardest natural substance on Earth?",
		answers: [
			{ text: "Gold", correct: false },
			{ text: "Platinum", correct: false },
			{ text: "Iron", correct: false },
			{ text: "Diamond", correct: true },
		],
	},
	{
		question: "How many planets are in the Solar System?",
		answers: [
			{ text: "8", correct: true },
			{ text: "7", correct: false },
			{ text: "10", correct: false },
			{ text: "9", correct: false },
		],
	},
	{
		question: "What is the national flower of Pakistan?",
		answers: [
			{ text: "Sunflower", correct: false },
			{ text: "Rose", correct: false },
			{ text: "Jasmine", correct: true },
			{ text: "Lotus", correct: false },
		],
	},
	{
		question: "Which bird is known for its ability to mimic human speech?",
		answers: [
			{ text: "Parrot", correct: true },
			{ text: "Eagle", correct: false },
			{ text: "Sparrow", correct: false },
			{ text: "Pigeon", correct: false },
		],
	},
	{
		question: "What is the chemical symbol for water?",
		answers: [
			{ text: "CO2", correct: false },
			{ text: "H2O2", correct: false },
			{ text: "H2O", correct: true },
			{ text: "O2", correct: false },
		],
	},
	{
		question: "Who was the first President of the United States?",
		answers: [
			{ text: "Abraham Lincoln", correct: false },
			{ text: "Thomas Jefferson", correct: false },
			{ text: "John Adams", correct: false },
			{ text: "George Washington", correct: true },
		],
	},
	{
		question: "Which is the longest river in the world?",
		answers: [
			{ text: "Yangtze River", correct: false },
			{ text: "Amazon River", correct: false },
			{ text: "Mississippi River", correct: false },
			{ text: "Nile River", correct: true },
		],
	},
	{
		question: "What is the boiling point of water?",
		answers: [
			{ text: "120°C", correct: false },
			{ text: "90°C", correct: false },
			{ text: "110°C", correct: false },
			{ text: "100°C", correct: true },
		],
	},
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextBtn.innerHTML = "Next";
	showQuestion();
}

function showQuestion() {
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
	});
}

// function showQuestion() {
// 	let currentQuestion = questions[currentQuestionIndex];
// 	let questionNo = currentQuestionIndex + 1;
// 	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// 	currentQuestion.answers.forEach((answer) => {
// 		const button = document.createElement("button");
// 		button.innerHTML = answer.text;
// 		button.classList.add("btn");
// 		answerButton.appendChild(button);
// 	});
// }

startQuiz();
