// Custom JavaScript
const form = document.querySelector("form");

const progressBarOuter = document.querySelector(".progress");

const progressBarOne = document.querySelector(".progress-bar:nth-of-type(1)");


// when the form is submitted trigger the function

// the function incrementally toggles the class from hidden to visible first on the whole .progress and then on each part of the .progress-bar

// then it will choose either #nice or #naughty at random and toggle hidden to visible

addEventListener('submit', (event) => {
        event.preventDefault();
        progressBarOuter.removeAttribute("hidden");
        setTimeout(() => {progressBarOne.removeAttribute("hidden")}, 1000);

        }

);



