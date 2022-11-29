// Custom JavaScript
const form = document.querySelector("form");

const progressBarOuter = document.querySelector(".progress");

const progressBarOne = document.querySelector(".progress-bar:nth-of-type(1)");
const progressBarTwo = document.querySelector(".progress-bar:nth-of-type(2)");
const progressBarThree = document.querySelector(".progress-bar:nth-of-type(3)");
const progressBarFour = document.querySelector(".progress-bar:nth-of-type(4)");

// the function incrementally toggles the class from hidden to visible first on the whole .progress and then on each part of the .progress-bar

// then it will choose either #nice or #naughty at random and toggle hidden to visible
// when the form is submitted trigger the event function
addEventListener('submit', (event) => {
    // prevent form default behaviour (which refreshes the page)
    event.preventDefault();
    // incrementally remove the hidden attribute on each part of the progress bar.
        progressBarOuter.removeAttribute("hidden");
        setTimeout(() => {progressBarOne.removeAttribute("hidden")}, 1500);
        setTimeout(() => {progressBarTwo.removeAttribute("hidden")}, 4500);
        setTimeout(() => {progressBarThree.removeAttribute("hidden")}, 4500);
        setTimeout(() => {progressBarFour.removeAttribute("hidden")}, 6000);

});





