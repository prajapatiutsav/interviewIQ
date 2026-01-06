const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toggleLink = document.getElementById("toggleLink");
const toggleText = document.getElementById("toggleText");
const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");

let isLogin = true;

toggleLink.addEventListener("click", function (e) {
  e.preventDefault();

  if (isLogin) {
    // Switch to Signup
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    formTitle.textContent = "Create an Account";
    formSubtitle.textContent = "Sign up to get started";
    toggleText.textContent = "Already have an account?";
    toggleLink.textContent = "Login";
  } else {
    // Switch to Login
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    formTitle.textContent = "Login to InterviewIQ";
    formSubtitle.textContent = "Enter your credentials to continue";
    toggleText.textContent = "Don’t have an account?";
    toggleLink.textContent = "Sign up";
  }

  isLogin = !isLogin;
});
// TEMPORARY: mock login/signup submit
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "resume.html";
});

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "resume.html";
});

