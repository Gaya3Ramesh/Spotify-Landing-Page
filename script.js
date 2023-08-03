const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
  });
});