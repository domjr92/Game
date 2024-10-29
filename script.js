const questions = [
    {
        question: "1. How should the government handle taxes on high-income earners?",
        options: {
            A: "Increase taxes on high-income earners to fund public programs.",
            B: "Reduce taxes on high-income earners to encourage investment and economic growth."
        },
        info: "Taxing high-income earners is often debated. Proponents argue it funds essential programs, while opponents believe it discourages investment and economic activity.",
        scenarios: {
            A: "If implemented, higher taxes on wealthy individuals could increase funding for social programs, infrastructure, and healthcare. This may reduce inequality and improve public services but could also discourage high earners from reinvesting in the economy, potentially slowing growth.",
            B: "Reducing taxes on high-income earners could lead to more private investment, stimulating job creation and economic growth. However, it may also reduce government revenue, potentially limiting funding for public services like education and healthcare."
        }
    },
    {
        question: "2. What is the best approach to healthcare access?",
        options: {
            A: "Expand government-supported healthcare programs for broader access.",
            B: "Limit government intervention and encourage private insurance solutions."
        },
        info: "Healthcare is often categorized as a public good. Expanding programs like Medicare could increase access, while private solutions aim to reduce government spending.",
        scenarios: {
            A: "Expanding government healthcare could improve access for those who can’t afford private insurance, leading to a healthier population. However, it may increase taxes and strain government resources.",
            B: "Limiting government healthcare and emphasizing private insurance could reduce government costs and potentially drive competition. However, it may leave some without adequate healthcare coverage if they cannot afford private options."
        }
    },
    // Continue to add the remaining questions in a similar structure, following the topics and scenarios we discussed
];

let currentQuestionIndex = 0;
let scoreA = 0;
let scoreB = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');

// Function to load a question
function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${questionObj.question}</h2>
        <label>
            <input type="radio" name="answer" value="A">
            ${questionObj.options.A}
        </label><br>
        <label>
            <input type="radio" name="answer" value="B">
            ${questionObj.options.B}
        </label>
        <p class="info"><em>${questionObj.info}</em></p>
        <p class="scenarios"><strong>Scenario A:</strong> ${questionObj.scenarios.A}</p>
        <p class="scenarios"><strong>Scenario B:</strong> ${questionObj.scenarios.B}</p>
    `;
}

// Function to handle "Next" button click
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    if (selectedOption.value === "A") scoreA++;
    if (selectedOption.value === "B") scoreB++;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    }
}

// Function to display results
function showResults() {
    let resultText;
    if (scoreA > scoreB) {
        resultText = "You lean toward the Democratic Party's platform.";
    } else if (scoreB > scoreA) {
        resultText = "You lean toward the Republican Party's platform.";
    } else {
        resultText = "Your responses are balanced between Democratic and Republican policies.";
    }
    resultContainer.innerHTML = resultText;
}

// Load the first question initially
loadQuestion();
