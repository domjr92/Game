window.onload = function() {
    const questions = [
        {
            question: "1. How should the government handle taxes on high-income earners?",
            options: {
                A: "Increase taxes on high-income earners to fund public programs.",
                B: "Reduce taxes on high-income earners to encourage investment and economic growth."
            },
            info: "Taxing high-income earners is often debated. Proponents argue it funds essential programs, while opponents believe it discourages investment and economic activity.",
            scenarios: {
                A: "Higher taxes on wealthy individuals could increase funding for social programs, infrastructure, and healthcare. However, it may discourage high earners from reinvesting in the economy, potentially slowing growth.",
                B: "Reducing taxes on high-income earners could lead to more private investment, stimulating job creation and economic growth. However, it may also reduce government revenue, potentially limiting funding for public services."
            }
        },
        {
            question: "2. What is the best approach to healthcare access?",
            options: {
                A: "Expand government-supported healthcare programs for broader access.",
                B: "Limit government intervention and encourage private insurance solutions."
            },
            info: "Expanding healthcare programs could increase access, while private solutions aim to reduce government spending.",
            scenarios: {
                A: "Expanding government healthcare could improve access for those who can’t afford private insurance but may increase taxes and strain government resources.",
                B: "Private solutions could reduce government costs but may leave some without adequate healthcare if they cannot afford private options."
            }
        },
        // Add the remaining questions (up to 10) here in the same format
    ];

    let currentQuestionIndex = 0;
    let scoreA = 0;
    let scoreB = 0;

    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');
    const resultContainer = document.getElementById('result-container');

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

    // Initialize the quiz
    loadQuestion();

    // Attach event listeners to buttons
    nextButton.onclick = nextQuestion;
    submitButton.onclick = showResults;
};
