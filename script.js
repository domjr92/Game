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
    {
        question: "3. How should the U.S. address climate change?",
        options: {
            A: "Invest in renewable energy and set emissions limits to protect the environment.",
            B: "Reduce regulations on industries to prioritize economic growth and job creation."
        },
        info: "Renewable energy limits emissions, while deregulation may boost industries but increase pollution.",
        scenarios: {
            A: "Renewable energy investments could reduce pollution but may increase initial costs, leading to short-term job losses.",
            B: "Reducing regulations could stimulate economic growth but may increase pollution and impact long-term sustainability."
        }
    },
    {
        question: "4. What role should the government have in education content?",
        options: {
            A: "Encourage curricula that promote diversity, equity, and inclusion.",
            B: "Restrict content on controversial topics like race and gender."
        },
        info: "Diverse curricula reflect society, while some argue complex topics are not suitable for schools.",
        scenarios: {
            A: "Promoting diverse curricula could create a more inclusive society but may introduce complex topics for younger students.",
            B: "Restricting controversial topics may reduce tensions but may leave students underprepared for diverse perspectives."
        }
    },
    {
        question: "5. What is your stance on gun laws?",
        options: {
            A: "Support universal background checks and restrictions on high-capacity magazines.",
            B: "Protect Second Amendment rights with minimal restrictions on firearm ownership."
        },
        info: "Background checks aim for safety, while minimal restrictions uphold gun rights.",
        scenarios: {
            A: "Background checks may reduce gun violence, but some argue they infringe on personal freedoms.",
            B: "Minimal restrictions uphold Second Amendment rights but could lead to higher rates of gun violence."
        }
    },
    {
        question: "6. How should the government handle immigration?",
        options: {
            A: "Create legal pathways for immigrants and provide resources for integration.",
            B: "Strengthen border security and prioritize deportations."
        },
        info: "Legal pathways are seen as humane, while strong borders emphasize security.",
        scenarios: {
            A: "Legal pathways could help immigrants integrate but may increase competition for jobs.",
            B: "Border security may reduce illegal immigration but could separate families and impact certain industries."
        }
    },
    {
        question: "7. What is your view on the role of police in communities?",
        options: {
            A: "Support community-based policing and prioritize funding for crime prevention.",
            B: "Strengthen law enforcement and increase penalties to ensure safety."
        },
        info: "Community-based policing builds trust, while stricter enforcement deters crime.",
        scenarios: {
            A: "Community policing could reduce crime but may be less effective for serious issues.",
            B: "Stricter enforcement may deter crime but could strain police-community relationships."
        }
    },
    {
        question: "8. How should the government approach social programs like welfare?",
        options: {
            A: "Expand social programs to reduce poverty and provide a safety net.",
            B: "Limit social programs to encourage self-reliance and reduce spending."
        },
        info: "Social programs reduce poverty but may increase dependency and debt.",
        scenarios: {
            A: "Expanding welfare could reduce poverty but may increase dependency and government debt.",
            B: "Limiting welfare may reduce debt but could leave some without support, raising poverty."
        }
    },
    {
        question: "9. How should the government handle trade with other countries?",
        options: {
            A: "Encourage free trade to lower costs and strengthen alliances.",
            B: "Use tariffs to protect American industries and reduce dependence on foreign goods."
        },
        info: "Free trade promotes affordable goods, while tariffs protect domestic industries.",
        scenarios: {
            A: "Free trade reduces costs for consumers but may harm local industries.",
            B: "Tariffs protect industries but can increase consumer prices and lead to trade conflicts."
        }
    },
    {
        question: "10. What approach should the U.S. take in foreign conflicts?",
        options: {
            A: "Use diplomacy and work with allies to promote peace and human rights.",
            B: "Focus on national interests and avoid involvement in foreign conflicts."
        },
        info: "Diplomatic efforts promote stability, while isolationism prioritizes national security.",
        scenarios: {
            A: "Diplomacy could lead to stronger alliances but may require substantial resources.",
            B: "Isolationism could save resources but may reduce U.S. global influence."
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

// Function to load a question
function loadQuestion() {
    const questionObj = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${questionObj.question}</h2>
Here is the complete **script.js** file with all 10 questions, including all updates to ensure the quiz loads correctly and provides feedback at the end.

---

### 3. **script.js**

```javascript
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
    {
        question: "3. How should the U.S. address climate change?",
        options: {
            A: "Invest in renewable energy and set emissions limits to protect the environment.",
            B: "Reduce regulations on industries to prioritize economic growth and job creation."
        },
        info: "Renewable energy limits emissions, while deregulation may boost industries but increase pollution.",
        scenarios: {
            A: "Renewable energy investments could reduce pollution but may increase initial costs, leading to short-term job losses.",
            B: "Reducing regulations could stimulate economic growth but may increase pollution and impact long-term sustainability."
        }
    },
    {
        question: "4. What role should the government have in education content?",
        options: {
            A: "Encourage curricula that promote diversity, equity, and inclusion.",
            B: "Restrict content on controversial topics like race and gender."
        },
        info: "Diverse curricula reflect society, while some argue complex topics are not suitable for schools.",
        scenarios: {
            A: "Promoting diverse curricula could create a more inclusive society but may introduce complex topics for younger students.",
            B: "Restricting controversial topics may reduce tensions but may leave students underprepared for diverse perspectives."
        }
    },
    {
        question: "5. What is your stance on gun laws?",
        options: {
            A: "Support universal background checks and restrictions on high-capacity magazines.",
            B: "Protect Second Amendment rights with minimal restrictions on firearm ownership."
        },
        info: "Background checks aim for safety, while minimal restrictions uphold gun rights.",
        scenarios: {
            A: "Background checks may reduce gun violence, but some argue they infringe on personal freedoms.",
            B: "Minimal restrictions uphold Second Amendment rights but could lead to higher rates of gun violence."
        }
    },
    {
        question: "6. How should the government handle immigration?",
        options: {
            A: "Create legal pathways for immigrants and provide resources for integration.",
            B: "Strengthen border security and prioritize deportations."
        },
        info: "Legal pathways are seen as humane, while strong borders emphasize security.",
        scenarios: {
            A: "Legal pathways could help immigrants integrate but may increase competition for jobs.",
            B: "Border security may reduce illegal immigration but could separate families and impact certain industries."
        }
    },
    {
        question: "7. What is your view on the role of police in communities?",
        options: {
            A: "Support community-based policing and prioritize funding for crime prevention.",
            B: "Strengthen law enforcement and increase penalties to ensure safety."
        },
        info: "Community-based policing builds trust, while stricter enforcement deters crime.",
        scenarios: {
            A: "Community policing could reduce crime but may be less effective for serious issues.",
            B: "Stricter enforcement may deter crime but could strain police-community relationships."
        }
    },
    {
        question: "8. How should the government approach social programs like welfare?",
        options: {
            A: "Expand social programs to reduce poverty and provide a safety net.",
            B: "Limit social programs to encourage self-reliance and reduce spending."
        },
        info: "Social programs reduce poverty but may increase dependency and debt.",
        scenarios: {
            A: "Expanding welfare could reduce poverty but may increase dependency and government debt.",
            B: "Limiting welfare may reduce debt but could leave some without support, raising poverty."
        }
    },
    {
        question: "9. How should the government handle trade with other countries?",
        options: {
            A: "Encourage free trade to lower costs and strengthen alliances.",
            B: "Use tariffs to protect American industries and reduce dependence on foreign goods."
        },
        info: "Free trade promotes affordable goods, while tariffs protect domestic industries.",
        scenarios: {
            A: "Free trade reduces costs for consumers but may harm local industries.",
            B: "Tariffs protect industries but can increase consumer prices and lead to trade conflicts."
        }
    },
    {
        question: "10. What approach should the U.S. take in foreign conflicts?",
        options: {
            A: "Use diplomacy and work with allies to promote peace and human rights.",
            B: "Focus on national interests and avoid involvement in foreign conflicts."
        },
        info: "Diplomatic efforts promote stability, while isolationism prioritizes national security.",
        scenarios: {
            A: "Diplomacy could lead to stronger alliances but may require substantial resources.",
            B: "Isolationism could save resources but may reduce U.S. global influence."
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
