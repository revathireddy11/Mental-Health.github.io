function calculateScore() {
    // Retrieve values from the form
    var question1 = parseInt(document.getElementById('question1').value);
    var question2 = parseInt(document.getElementById('question2').value);

    // Add more questions as needed

    // Calculate total score
    var totalScore = question1 + question2;

    // Provide a result based on the total score
    var resultElement = document.getElementById('result');
    if (totalScore < 10) {
        resultElement.innerHTML = "Your mental health seems to be in a good state, but it's essential to monitor it regularly.";
    } else if (totalScore >= 10 && totalScore <= 15) {
        resultElement.innerHTML = "You might be experiencing some stress or mild challenges. Consider seeking support if needed.";
    } else {
        resultElement.innerHTML = "It's important to prioritize your mental health. Please consider talking to a professional for guidance.";
    }
}