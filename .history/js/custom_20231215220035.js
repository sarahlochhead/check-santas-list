// Custom JavaScript
const form = document.querySelector("form");
const main = document.querySelector(".main");

const name = document.

const routedToNorthPoleBar = document.querySelector(".routed-to-north-pole-bar");

const elfVerification = document.querySelector(".elf-verification");
const elfVerificationBar = document.querySelector(".elf-verification-bar");

const santaValidation = document.querySelector(".santa-validation");
const santaValidationBar = document.querySelector(".santa-validation-bar");

const viewResults = document.querySelector(".modal-footer > button");

const nice = document.querySelector("#nice");
const naughty = document.querySelector("#naughty");
const possibleResults = [nice, naughty];

const newRequest = document.querySelector(".new-request")
const nextRequest = document.querySelector(".next-request")

// when the form is done (not really a submit button) trigger the event function

// The function incrementally removes the hidden attribute to each .progress-bar, animates it to 100% and holds the style at 100%. And then shows the results button.

addEventListener("click", (e) => {
    // incrementally remove the hidden attribute on each part of the progress bar.

    routedToNorthPoleBar.animate({ width: "100%" }, 2000);
    setTimeout(() => {routedToNorthPoleBar.style.width = "100%"}, 2000);

    // there is a way to simplify this and loop through ... keep working on this (line 29-34)
    setTimeout(() => {elfVerification.removeAttribute("hidden")}, 2000);
    elfVerificationBar.animate({ width: "100%" }, 6000);
    setTimeout(() => {elfVerificationBar.style.width = "100%"}, 6000);
   
    setTimeout(() => {santaValidation.removeAttribute("hidden")}, 6000);santaValidationBar.animate({ width: "100%" }, 6000);
    setTimeout(() => {santaValidationBar.style.width = "100%"}, 8000);
   
    setTimeout(() => {viewResults.removeAttribute("hidden")}, 9000);

    setTimeout(() => {main.setAttribute("hidden", "")}, 9000);

});

 // when you click view results, it will choose either #nice or #naughty at random and toggle hidden to visible
    // choose a response at random from the results array and display it.
viewResults.addEventListener("click", (e) => {
    const result = Math.floor(Math.random()* possibleResults.length);
    //console.log(result);
    setTimeout(() => {possibleResults[result].classList.toggle("onscreen")}, 0);
});

// reload the page on click
newRequest.addEventListener("click", (e) => {
    document.location.reload();
});

nextRequest.addEventListener("click", (e) => {
    document.location.reload();
});
