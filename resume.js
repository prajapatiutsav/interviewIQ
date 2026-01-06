const resumeForm = document.getElementById("resumeForm");

resumeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // TEMPORARY: simulate resume analysis
  alert("Resume uploaded successfully! (AI analysis will be added later)");

  // Move to results page later
  window.location.href = "results.html";
});
