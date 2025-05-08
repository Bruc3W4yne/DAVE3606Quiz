document.addEventListener('DOMContentLoaded', () => {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const resultArea = document.getElementById('result-area');
    const scoreTextElement = document.getElementById('score-text');
    const questionArea = document.getElementById('question-area');
    const restartButton = document.getElementById('restart-btn');

    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startQuiz() {
        shuffledQuestions = [...questions]; // Make a copy to shuffle
        shuffleArray(shuffledQuestions);

        currentQuestionIndex = 0;
        score = 0;
        resultArea.style.display = 'none';
        questionArea.style.display = 'block';
        nextButton.textContent = 'Next Question';
        nextButton.style.display = 'block'; // Ensure next button is visible
        restartButton.style.display = 'none'; // Hide restart button during quiz
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < shuffledQuestions.length) {
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            questionTextElement.textContent = currentQuestion.text;
            optionsContainer.innerHTML = '';
            nextButton.disabled = true; // Disable until an option is selected

            const shuffledOptions = [...currentQuestion.options];
            shuffleArray(shuffledOptions);

            shuffledOptions.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.onclick = () => selectAnswer(button, option.correct, currentQuestion.options);
                optionsContainer.appendChild(button);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(selectedButton, isCorrect, allOriginalOptions) {
        const optionButtons = optionsContainer.getElementsByTagName('button');
        for (let btn of optionButtons) {
            btn.disabled = true; // Disable all buttons
            // Find the original option text to check its correctness
            const originalOption = allOriginalOptions.find(opt => opt.text === btn.textContent);
            if (originalOption) {
                if (originalOption.correct) {
                    btn.classList.add('correct');
                } else if (btn === selectedButton) { // Only mark the selected one as incorrect if it was wrong
                    btn.classList.add('incorrect');
                }
            }
        }

        if (isCorrect) {
            score++;
        }
        nextButton.disabled = false;
    }

    function showResults() {
        questionArea.style.display = 'none';
        resultArea.style.display = 'block';
        scoreTextElement.textContent = `${score} out of ${shuffledQuestions.length}`;
        nextButton.style.display = 'none'; // Hide next button on results page
        restartButton.style.display = 'block'; // Show restart button
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });
    
    restartButton.addEventListener('click', startQuiz);

    if (typeof questions !== 'undefined' && questions.length > 0) {
        startQuiz(); // Initialize the quiz if questions are loaded
    } else {
        questionTextElement.textContent = 'No questions loaded. Please check questions.js.';
        optionsContainer.innerHTML = '';
        nextButton.style.display = 'none';
    }
}); 