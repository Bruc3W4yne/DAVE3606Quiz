document.addEventListener('DOMContentLoaded', () => {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const resultArea = document.getElementById('result-area');
    const scoreTextElement = document.getElementById('score-text');
    const questionArea = document.getElementById('question-area');
    const restartButton = document.getElementById('restart-btn');
    const questionLimitInput = document.getElementById('question-limit');
    const feedbackListElement = document.getElementById('feedback-list');
    const liveScoreElement = document.getElementById('live-score');

    let currentQuestionIndex = 0;
    let score = 0;
    let shuffledQuestions = [];
    let incorrectlyAnsweredQuestions = [];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startQuiz() {
        shuffledQuestions = [...questions];
        shuffleArray(shuffledQuestions);

        const limit = parseInt(questionLimitInput.value, 10);
        if (!isNaN(limit) && limit > 0 && limit < shuffledQuestions.length) {
            shuffledQuestions = shuffledQuestions.slice(0, limit);
        }

        currentQuestionIndex = 0;
        score = 0;
        incorrectlyAnsweredQuestions = [];
        resultArea.style.display = 'none';
        feedbackListElement.innerHTML = '';
        questionArea.style.display = 'block';
        nextButton.textContent = 'Next Question';
        nextButton.style.display = 'block';
        restartButton.style.display = 'none';
        updateLiveScore();
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestionIndex < shuffledQuestions.length) {
            updateLiveScore();
            const currentQuestion = shuffledQuestions[currentQuestionIndex];
            questionTextElement.textContent = currentQuestion.text;
            optionsContainer.innerHTML = '';
            nextButton.disabled = true;

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
        const currentQuestion = shuffledQuestions[currentQuestionIndex];

        for (let btn of optionButtons) {
            btn.disabled = true;
            const originalOption = allOriginalOptions.find(opt => opt.text === btn.textContent);
            if (originalOption) {
                if (originalOption.correct) {
                    btn.classList.add('correct');
                } else if (btn === selectedButton) {
                    btn.classList.add('incorrect');
                }
            }
        }

        if (isCorrect) {
            score++;
        } else {
            incorrectlyAnsweredQuestions.push(currentQuestion);
        }
        updateLiveScore();
        nextButton.disabled = false;
    }

    function updateLiveScore() {
        if (liveScoreElement) {
            liveScoreElement.textContent = `Score: ${score} / ${currentQuestionIndex}`;
        }
    }

    function showResults() {
        questionArea.style.display = 'none';
        resultArea.style.display = 'block';
        scoreTextElement.textContent = `${score} out of ${shuffledQuestions.length}`;
        nextButton.style.display = 'none';
        restartButton.style.display = 'block';

        generateFeedback();
    }

    function generateFeedback() {
        feedbackListElement.innerHTML = '';
        if (incorrectlyAnsweredQuestions.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Great job! No specific areas flagged for review.';
            feedbackListElement.appendChild(li);
            return;
        }

        incorrectlyAnsweredQuestions.forEach(question => {
            const li = document.createElement('li');
            const lectureInfo = question.lecture ? `(Lecture ${question.lecture_num || 'N/A'})` : '';
            li.textContent = `${lectureInfo}: ${question.text}`;
            feedbackListElement.appendChild(li);
        });
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        loadQuestion();
    });
    
    restartButton.addEventListener('click', startQuiz);
    questionLimitInput.addEventListener('change', startQuiz);

    if (typeof questions !== 'undefined' && questions.length > 0) {
        startQuiz();
    } else {
        questionTextElement.textContent = 'No questions loaded. Please check questions.js.';
        optionsContainer.innerHTML = '';
        nextButton.style.display = 'none';
    }
}); 