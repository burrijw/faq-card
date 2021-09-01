const questionWrapper = document.querySelectorAll('.question-wrapper');


questionWrapper.forEach((el) => {
    el.addEventListener("click", () => {
       const question = el;
       const toggle = question.children[1];
       question.nextElementSibling.classList.toggle('hidden');
       toggle.classList.toggle('animate-dropdown');
    })
})
