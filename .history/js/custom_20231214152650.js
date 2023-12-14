// Custom JavaScript
const form = document.querySelector("form");

const routedToNorthPoleBar = document.querySelector(".routed-to-north-pole-bar");

const elfVerification = document.querySelector(".elf-verification");
const elfVerificationBar = document.querySelector(".elf-verification-bar");

const santaValidation = document.querySelector(".santa-validation");
const santaValidationBar = document.querySelector(".santa-validation-bar");

const viewResults = document.querySelector(".modal-footer)

const nice = document.querySelector("#nice");
const naughty = document.querySelector("#naughty");
const possibleResults = [nice, naughty];


    

// the function incrementally removes the hidden attribute to each .progress-bar, animates it to 100% and holds the style at 100%.

// then it will choose either #nice or #naughty at random and toggle hidden to visible
// when the form is done (not really a submit button) trigger the event function
addEventListener("click", (e) => {
    // incrementally remove the hidden attribute on each part of the progress bar.
    
    routedToNorthPoleBar.animate({ width: "100%" }, 2000);
    setTimeout(() => {routedToNorthPoleBar.style.width = "100%"}, 2000);

    setTimeout(() => {elfVerification.removeAttribute("hidden")}, 2000);
    elfVerificationBar.animate({ width: "100%" }, 4000);
    setTimeout(() => {elfVerificationBar.style.width = "100%"}, 4000);
   
    setTimeout(() => {santaValidation.removeAttribute("hidden")}, 4000);santaValidationBar.animate({ width: "100%" }, 6000);
    setTimeout(() => {santaValidationBar.style.width = "100%"}, 6000);
   
        
    // choose a response at random from the results array and display it.
    // const result = Math.floor(Math.random()* possibleResults.length);
    // console.log(result);
    // setTimeout(() => {possibleResults[result].removeAttribute("hidden");}, 9999);

});





