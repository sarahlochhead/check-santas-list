// Custom JavaScript

const main = document.querySelector(".main");

const yourName = document.querySelector("input");
const yourRequest = document.querySelector("textarea");

const displayName = document.querySelectorAll(".your-name");
const displayRequest = document.querySelectorAll(".your-request");

const submit = document.getElementById("submit");

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

document.addEventListener("DOMContentLoaded", () => {
    // when the form is done grab the input values
    yourName.addEventListener("blur", (e) => {
        console.log(yourName.value);
        for (let i = 0; i < displayName.length; i++) {
            displayName.inContent = `${yourName.value}`;
            console.log(displayName.innerHTML);
          };
    });

    yourRequest.addEventListener("blur", (e) => {
        console.log(yourRequest.value);
        for (let i = 0; i < displayRequest.length; i++) {
            displayRequest.textContent = `${yourName.value}`;
            console.log(displayRequest.innerHTML);
          };
    });

    // Then trigger the event function

    // The function incrementally removes the hidden attribute to each .progress-bar, animates it to 100% and holds the style at 100%. And then shows the results button.

    submit.addEventListener("click", (e) => {
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

        setTimeout(() => {main.classList.toggle("offscreen")}, 9000);

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
});