const questions = document.querySelectorAll(".accordion__question");
//call openDefaultQuestion when the html finish loading
document.addEventListener("DOMContentLoaded", setHeighToOpenedQuestions);
const log = () => console.log("resized");
//loop through questions and add click event listener to each of them
questions.forEach((question) => {
  question.addEventListener("click", (event) => {
    closeOpenAccordion(event, question);
    log();
  });
});
window.addEventListener("resize", (e) => {
  setHeighToOpenedQuestions(), console.log(e.target);
});

// expanding the default question
function setHeighToOpenedQuestions() {
  const already_opened_question = document.querySelector(
    ".accordion__question.accordion__question--open",
  );
  const already_opened_collapse =
    already_opened_question.parentElement.parentElement.querySelector(
      ".accordion__collapse.accordion__collapse--show",
    );
  const already_opened_answer =
    already_opened_collapse.querySelector(".accordion__answer");
  const already_opened_answer_height = already_opened_answer.offsetHeight;
  already_opened_collapse.style.height = `${already_opened_answer_height}px`;
}
// close and open the accordion
function closeOpenAccordion(e, question) {
  questions.forEach((question) => {
    const other_collapse = question.parentElement.parentElement.querySelector(
      ".accordion__collapse",
    );
    if (other_collapse.classList.contains("accordion__collapse--show")) {
      other_collapse.style.height = "";
      question.classList.remove("accordion__question--open");
      other_collapse.addEventListener(
        "transitionend",
        () => {
          other_collapse.classList.remove("accordion__collapse--show");
        },
        { once: true },
      );
    }
  });

  const collapse = e.target.parentElement.parentElement.querySelector(
    ".accordion__collapse",
  );
  const answer = e.target.parentElement.parentElement.querySelector(
    ".accordion__answer ",
  );
  let answer_height;
  if (!collapse.classList.contains("accordion__collapse--show")) {
    question.classList.add("accordion__question--open");
    collapse.classList.add("accordion__collapse--show");
    answer_height = answer.offsetHeight;
    collapse.style.height = `${answer_height}px`;
  } else {
    collapse.style.height = "";
    question.classList.remove("accordion__question--open");
    collapse.addEventListener(
      "transitionend",
      () => collapse.classList.remove("accordion__collapse--show"),
      { once: true },
    );
  }
}
const nm = 125;
