// 1. Define the function
function checkAnswer() {
    // 2. The correct answer is 4
    const correctAnswer = "4";

    // 3. Get user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 4. If no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // 5. Compare and give feedback
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// 6. Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
