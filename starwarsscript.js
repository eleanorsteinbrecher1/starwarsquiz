// Select all <button> elements on my page
let buttons = document.querySelectorAll("button");

// Select first HTML element with class of score
let scoreElement = document.querySelector(".score");

// Select the Next button
let nextButton = document.getElementById("nextButton");

// Select the Try Again button
let tryAgainButton = document.getElementById("tryAgainButton");

// Select the Main Menu button
let mainMenuButton = document.getElementById("mainMenuButton");

// Keep track of score
let score = 0;

// Keep track of the number of questions answered
let questionsAnswered = 0;

// Define check function
function check(event) {
  // Find clicked button
  let button = event.target;

  // Find current question
  let question = button.parentElement;

  // Get class name of button
  let name = button.className;

  // If answer is correct
  if (name.includes("correct")) {
    // Apply brighter blue glow for correct answer
    button.classList.add("correct-clicked");

    // Update score
    score += 1;

    // Display score on page
    scoreElement.textContent = score;
  } else {
    // Apply brighter red glow for wrong answer
    button.classList.add("wrong-clicked");

    // Find the explanation element
    let explanation = question.querySelector(".explanation");

    // If an explanation exists
    if (explanation) {
      // Show explanation
      explanation.style.display = "block";
    }
  }

  // Find all button elements inside the current question
  let questionButtons = question.querySelectorAll("button");

  // Disable other buttons except the clicked one
  for (let btn of questionButtons) {
    if (btn !== button) {
      btn.disabled = true;
    }
  }

  // Increment the number of questions answered
  questionsAnswered++;

  // Check if all questions are answered
  if (questionsAnswered === 4) {
    if (score >= 3) {
      // Show the Next button if score is at least 3
      nextButton.style.display = "inline-block";
    } else {
      // Show the Try Again button and Main Menu button if score is less than 3
      tryAgainButton.style.display = "inline-block";
      mainMenuButton.style.display = "inline-block";
    }
  }
}

// For each button on my list
for (let button of buttons) {
  // Only apply the click handler to the answer buttons, not the Next, Try Again, or Main Menu buttons
  if (!button.classList.contains('next-button') && !button.classList.contains('try-again-button') && !button.classList.contains('main-menu-button')) {
    button.onclick = check;
  }
}
