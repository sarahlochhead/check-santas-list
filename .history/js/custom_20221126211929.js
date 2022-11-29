// Custom JavaScript
const form = document.querySelector("form");

const progressBarOuter = document.querySelector(".progress");

const progressBars = document.querySelectorAll(".progress-bar");


// when the form is submitted trigger the function

// the function incrementally toggles the class from hidden to visible first on the whole .progress and then on each part of the .progress-bar

// then it will choose either #nice or #naughty at random and toggle hidden to visible

addEventListener('submit', (event) => {
        event.preventDefault();
        progressBarOuter.removeAttribute("hidden");
        setTimeout(() => {  console.log("World!"); }, 5000);
   

        }

);



