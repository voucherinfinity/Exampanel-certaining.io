  // Set the starting time (30 minutes in seconds)
  let timeInSeconds = 30 * 60;

  function startCountdown() {
      const mobileTimerElement = document.getElementById("mobile-timer");
      const desktopTimerElement = document.getElementById("desktop-timer");

      const countdownInterval = setInterval(() => {
          const minutes = Math.floor(timeInSeconds / 60);
          const seconds = timeInSeconds % 60;

          // Display the time in MM:SS format
          mobileTimerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          desktopTimerElement.textContent = mobileTimerElement.textContent; // Sync timers

          // Decrease the time
          timeInSeconds--;

          // Stop the countdown when time reaches 0
          if (timeInSeconds < 0) {
              clearInterval(countdownInterval);
              mobileTimerElement.textContent = "Time's up!";
              desktopTimerElement.textContent = "Time's up!";
          }
      }, 1000); // Update the timer every second
  }

  // Start the countdown when the page loads
  window.onload = startCountdown;




  document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const questions = document.querySelectorAll('.questionans');
  
    // Function to show the corresponding question and hide others
    function showQuestion(questionNumber) {
      // Hide all questions
      questions.forEach(question => {
        question.style.display = 'none';
      });
  
      // Show the specific question
      const activeQuestion = document.querySelector(`.questionans[data-question="${questionNumber}"]`);
      if (activeQuestion) {
        activeQuestion.style.display = 'block';
      }
    }
  
    // Add click event listeners to all toggle buttons
    toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const questionNumber = button.getAttribute('data-question');
  
        // Remove active class from all buttons
        toggleButtons.forEach(btn => btn.classList.remove('active'));
  
        // Add active class to the clicked button
        button.classList.add('active');
  
        // Show the corresponding question
        showQuestion(questionNumber);
      });
    });
  
    // Initially show the first question and activate the first button
    toggleButtons[0].classList.add('active');
    showQuestion(1);
  });