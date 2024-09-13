let countdownInterval;

function updateMinutes(value) {
  document.getElementById("nap-button").innerText = `Nap for ${value} minutes`;
}

document.addEventListener("DOMContentLoaded", function() {
  updateMinutes(document.getElementById("customRange3").value);
});

function startNap() {
  const minutes = document.getElementById("customRange3").value;
  const milliseconds = minutes * 60 * 1000;
  const endTime = Date.now() + milliseconds; // Record the end time

  // Hide the configuration screen and show the overlay
  document.querySelector(".container-fluid").classList.add("hidden");
  document.getElementById("nap-overlay").style.display = "flex";

  // Clear any previous interval
  clearInterval(countdownInterval);

  // Start the countdown and update the display
  countdownInterval = setInterval(() => {
    const timeLeft = endTime - Date.now();
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Wake up! 🛏️"); // Wake up alert
      endNap();
    } else {
      const minutesLeft = Math.floor(timeLeft / (1000 * 60));
      const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
      document.getElementById("overlay-timer").innerText = `${minutesLeft}m ${secondsLeft}s`;
    }
  }, 1000);
}

function endNap() {
  // Hide the overlay and bring back the configuration screen
  document.getElementById("nap-overlay").style.display = "none";
  document.querySelector(".container-fluid").classList.remove("hidden");

  // Clear the timer display
  document.getElementById("overlay-timer").innerText = "";
}