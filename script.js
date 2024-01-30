const questions = document.querySelectorAll(".questionaire");

questions.forEach((questionaire) => {
  questionaire.addEventListener("click", () => {
    questionaire.classList.toggle("active");
  });
});
