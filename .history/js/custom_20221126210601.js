// Custom JavaScript
const form = document.querySelector("form");
console.log(form);

const progressBar = document.querySelector(".progress");
console.log(progressBar);


// when the form is submitted trigger the function

// the function incrementally toggles the class from hidden to visible first on the whole .progress and then on each part of the .progress-bar

// then it will choose either #nice or #naughty at random and toggle hidden to visible

addEventListener('submit', (event) => {
        event.preventDefault();
        progressBar.style.visibility = "visible";
        

});



