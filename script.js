const menuBar = (e) => {
  e.classList.toggle("change");
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".icon-burger");
  const elementToToggle = document.getElementById("links");

  button.addEventListener("click", () => {
    elementToToggle.classList.toggle("hide");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".icon-burger");
  const elementToToggle = document.getElementById("mobile-btn");

  button.addEventListener("click", () => {
    elementToToggle.classList.toggle("hide");
  });
});

const questions = document.querySelectorAll(".questionaire");

questions.forEach((questionaire) => {
  questionaire.addEventListener("click", () => {
    questionaire.classList.toggle("active");
  });
});
