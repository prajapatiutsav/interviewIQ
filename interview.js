const answerForm = document.getElementById("answerForm");

answerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Answer submitted! AI evaluation will be added later.");

  // For now, redirect back to results
  window.location.href = "results.html";
});
