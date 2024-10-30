window.onload = function() {
    const questions = [
        {
            question: "1. How should the government handle taxes on high-income earners?",
            options: {
                A: "Increase taxes on high-income earners to fund public programs.",
                B: "Reduce taxes on high-income earners to encourage investment and economic growth."
            },
            info: "Taxing high-income earners is debated. Proponents argue it funds essential programs, while opponents believe it discourages investment and economic activity.",
            scenarios: {
                A: "Higher taxes on wealthy individuals could increase funding for social programs, infrastructure, and healthcare. However, it may discourage high earners from reinvesting in the economy.",
                B: "Reducing taxes on high-income earners could lead to more private investment and job creation. However, it may reduce government revenue, limiting public service funding."
            }
        },
        {
            question: "2. What is the best approach to healthcare access?",
            options: {
                A: "Expand government-supported healthcare programs for broader access.",
                B: "Limit government intervention and encourage private insurance solutions."
            },
            info: "Healthcare policies impact accessibility and government spending. Public healthcare expands access but may increase taxes, while private solutions reduce government costs.",
            scenarios: {
                A: "Expanding government healthcare could improve access but may strain resources and require higher taxes.",
                B: "Private insurance solutions could encourage competition and lower costs but may leave some without adequate coverage."
            }
        },
        {
            question: "3. How should the U.S. address climate change?",
            options: {
                A: "Invest in renewable energy and set emissions limits.",
                B: "Reduce regulations on industries to prioritize economic growth and job creation."
            },
            info: "Climate policies can impact both environmental protection and economic growth.",
            scenarios: {
                A: "Renewable energy investments may reduce pollution but could initially lead to job losses in fossil fuel industries.",
                B: "Reducing regulations may stimulate growth in traditional energy sectors but could increase pollution."
            }
        },
        {
            question: "4. What role should the government have in education content?",
            options: {
                A: "Encourage curricula that promote diversity, equity, and inclusion.",
                B: "Restrict content on controversial topics like race and gender."
            },
            info: "Education policy shapes student exposure to social issues.",
            scenarios: {
                A: "Diverse curricula may promote social equity but could introduce complex topics.",
                B: "Restricting content could reduce tension but may leave students underprepared for diverse perspectives."
            }
        },
        {
            question: "5. What is your stance on gun laws?",
            options: {
                A: "Support universal background checks and restrictions on high-capacity magazines.",
                B: "Protect Second Amendment rights with minimal restrictions on firearm ownership."
            },
            info: "Gun policy is polarizing, balancing public safety and individual rights.",
            scenarios: {
                A: "Background checks could reduce gun violence but may be seen as an infringement on freedoms.",
                B: "Minimal restrictions uphold gun rights but could lead to higher rates of gun violence."
            }
        },
        {
            question: "6. How should the government handle immigration?",
            options: {
                A: "Create legal pathways for immigrants and provide resources for integration.",
                B: "Strengthen border security and prioritize deportations."
            },
            info: "Immigration policy affects economic, social, and security issues.",
            scenarios: {
                A: "Legal pathways may help immigrants integrate but could increase job competition.",
                B: "Strict border security could reduce illegal immigration but might strain certain industries."
            }
        },
        {
            question: "7. What is your view on the role of police in communities?",
            options: {
                A: "Support community-based policing and funding for crime prevention programs.",
                B: "Strengthen law enforcement and increase penalties for crimes."
            },
            info: "Different policing approaches impact community relations and crime prevention.",
            scenarios: {
                A: "Community policing may build trust but may be less effective in serious cases.",
                B: "Stricter enforcement could deter crime but may lead to strained police-community relationships."
            }
        },
        {
            question: "8. How should the government approach social programs like welfare?",
            options: {
                A: "Expand social programs to reduce poverty.",
                B: "Limit social programs to encourage self-reliance and reduce spending."
            },
            info: "Welfare policies impact poverty reduction and government spending.",
            scenarios: {
                A: "Expanding welfare could help those in need but may increase dependency and debt.",
                B: "Limiting welfare may encourage self-reliance but could raise poverty levels."
            }
        },
        {
            question: "9. How should the government handle trade with other countries?",
            options: {
                A: "Encourage free trade to lower costs and strengthen alliances.",
                B: "Use tariffs to protect American industries."
            },
            info: "Trade policies affect consumer prices and domestic industry protection.",
            scenarios: {
                A: "Free trade could lower consumer prices but may harm local industries.",
                B: "Tariffs protect industries but could increase prices and lead to trade conflicts."
            }
        },
        {
            question: "10. What approach should the U.S. take in foreign conflicts?",
            options: {
                A: "Use diplomacy to promote peace and human rights.",
                B: "Focus on national interests and avoid foreign conflicts."
            },
            info: "Foreign policy impacts global stability and national security.",
            scenarios: {
                A: "Diplomacy could strengthen alliances but may require significant resources.",
                B: "Isolationism could save resources but reduce U.S. influence globally."
            }
        }
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
