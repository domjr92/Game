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
    {
        question: "3. How should the U.S. address climate change?",
        options: {
            A: "Invest in renewable energy and set emissions limits to protect the environment.",
            B: "Reduce regulations on industries to prioritize economic growth and job creation."
        },
        info: "Climate policies can have trade-offs between environmental protection and economic impact. Renewable energy limits emissions, while deregulation may boost industries but increase pollution.",
        scenarios: {
            A: "Focusing on renewable energy and emissions limits could reduce pollution and mitigate climate change effects, fostering a healthier environment. However, initial costs for transitioning industries may lead to job losses or increased prices in the short term.",
            B: "Reducing regulations on industries could stimulate economic growth and create jobs, especially in energy-intensive sectors. This approach may increase pollution and hinder long-term environmental sustainability."
        }
    },
    {
        question: "4. What role should the government have in education content?",
        options: {
            A: "Encourage curricula that promote diversity, equity, and inclusion.",
            B: "Restrict content on controversial topics like race and gender to maintain neutrality."
        },
        info: "Curriculum debates often center on inclusivity versus neutrality. Supporters of diverse curricula say it reflects society, while opponents argue some topics are too complex for schools.",
        scenarios: {
            A: "Promoting diversity, equity, and inclusion in curricula could create a more accepting society and help address social inequalities. However, some believe it may introduce complex topics that are difficult for younger students to process.",
            B: "Limiting controversial topics could keep education focused on core subjects, potentially reducing classroom tensions. Critics argue this may leave students underprepared for diverse perspectives they’ll encounter outside school."
        }
    },
    {
        question: "5. What is your stance on gun laws?",
        options: {
            A: "Support universal background checks and restrictions on high-capacity magazines.",
            B: "Protect Second Amendment rights with minimal restrictions on firearm ownership."
        },
        info: "Gun policy is polarizing in the U.S. Proponents of background checks argue for safety, while advocates of gun rights view restrictions as infringements on personal freedom.",
        scenarios: {
            A: "Universal background checks and magazine restrictions may reduce gun violence and mass shootings, increasing public safety. However, some argue it may infringe on personal freedoms and that determined individuals may still find illegal access to firearms.",
            B: "Minimal restrictions on firearms may uphold Second Amendment rights and allow for self-defense. Critics argue this could lead to higher rates of gun violence and make it easier for firearms to fall into the wrong hands."
        }
    },
    {
        question: "6. How should the government handle immigration?",
        options: {
            A: "Create legal pathways for immigrants and provide resources for integration.",
            B: "Strengthen border security and prioritize deportations to prevent illegal immigration."
        },
        info: "Immigration policy affects economic, social, and security issues. Legal pathways are seen as humane, while strong borders emphasize national security and sovereignty.",
        scenarios: {
            A: "Creating legal pathways could help immigrants integrate and contribute to the economy. However, it may increase competition for jobs and public resources.",
            B: "Focusing on border security and deportations may reduce illegal immigration and improve national security. However, it may also separate families and harm the economy by reducing the labor force in certain sectors."
        }
    },
    {
        question: "7. What is your view on the role of police in communities?",
        options: {
            A: "Support community-based policing and prioritize funding for crime prevention programs.",
            B: "Strengthen law enforcement and increase penalties for crimes to ensure public safety."
        },
        info: "Community-based policing aims to build trust with residents, while traditional enforcement focuses on deterring crime through stricter laws and penalties.",
        scenarios: {
            A: "Community-based policing may build trust and improve cooperation with residents, potentially reducing crime. Critics argue it may be less effective in quickly addressing serious crime.",
            B: "Increasing penalties and strengthening law enforcement may deter crime and increase public safety, but it could lead to higher incarceration rates and strain relationships between police and communities."
        }
    },
    {
        question: "8. How should the government approach social programs like welfare?",
        options: {
            A: "Expand social programs to reduce poverty and provide a safety net.",
            B: "Limit social programs to encourage self-reliance and reduce government spending."
        },
        info: "Social programs can support those in need but may also raise concerns about dependency and government debt. Balancing support and responsibility is key in this debate.",
        scenarios: {
            A: "Expanding welfare programs could reduce poverty and help those in need but may increase government spending and potentially foster dependency.",
            B: "Limiting welfare may encourage self-reliance and reduce government debt, but it may leave some without adequate support and increase poverty levels."
        }
    },
    {
        question: "9. How should the government handle trade with other countries?",
        options: {
            A: "Encourage free trade to lower costs for consumers and strengthen alliances.",
            B: "Use tariffs to protect American industries and reduce dependence on foreign goods."
        },
        info: "Free trade aims to provide affordable goods and create global partnerships, while protectionist tariffs support domestic industries but can increase consumer prices.",
        scenarios: {
            A: "Free trade can reduce costs for consumers and strengthen international relationships. However, it may harm domestic industries that struggle to compete globally.",
            B: "Tariffs can protect American industries and promote local jobs but may increase prices for consumers and lead to trade conflicts."
        }
    },
    {
        question: "10. What approach should the U.S. take in foreign conflicts?",
        options: {
            A: "Use diplomacy and work with allies to promote peace and human rights.",
            B: "Focus on national interests and avoid involvement in foreign conflicts."
        },
        info: "Diplomatic efforts promote global stability but can involve costly commitments, while isolationist approaches prioritize national security but may limit global influence.",
        scenarios: {
            A: "A diplomatic approach could lead to stronger alliances and greater global influence, promoting peace and human rights. However, it may require substantial resources and commitments.",
            B: "Focusing on national interests could save resources and avoid entanglements, but it may weaken alliances and reduce U.S. influence on global issues."
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

    if (selectedOption.value
