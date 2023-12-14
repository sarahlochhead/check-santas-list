// Custom JavaScript
const form = document.querySelector("form");

const routedToNorthPoleBar = document.querySelector(".routed-to-north-pole");

const button = document.getElementsByTagName("button");

const progressBarOne = document.querySelector(".progress-bar:nth-of-type(1)");
const progressBarTwo = document.querySelector(".progress-bar:nth-of-type(2)");
const progressBarThree = document.querySelector(".progress-bar:nth-of-type(3)");


const nice = document.querySelector("#nice");
const naughty = document.querySelector("#naughty");
const possibleResults = [nice, naughty];


    

// the function incrementally toggles the class from hidden to visible first on the whole .progress and then on each part of the .progress-bar

// then it will choose either #nice or #naughty at random and toggle hidden to visible
// when the form is done (not really a submit button) trigger the event function
button.addEventListener("click", (e) => {
    // incrementally remove the hidden attribute on each part of the progress bar.
    
    routedToNorthPoleBar.animate({
        width: 100%
    }, 2500)
    // setTimeout(() => {progressBarOne.removeAttribute("hidden")}, 1500);
    // setTimeout(() => {progressBarTwo.removeAttribute("hidden")}, 4500);setTimeout(() => {progressBarThree.removeAttribute("hidden")}, 7500);
   
        
    // choose a response at random from the results array and display it.
    // const result = Math.floor(Math.random()* possibleResults.length);
    // console.log(result);
    // setTimeout(() => {possibleResults[result].removeAttribute("hidden");}, 9999);

});





