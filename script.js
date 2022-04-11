// Write your JavaScript code here!
// let formSubmission = require('scriptHelper.js')


window.addEventListener("load", function() {
    let form = document.querySelector("form")
        form.addEventListener("submit", function(event) {
        let userInputPilot = document.querySelector("input[name=pilotName]");
        let userInputCoPilot = document.querySelector("input[name=copilotName]");
        let userInputFuelLevel = document.querySelector("input[name=fuelLevel]");
        let userInputCargoMass = document.querySelector("input[name=cargoMass]");
        if (validateInput(userInputPilot) === Empty){
            
        }
        event.preventDefault();

    })




   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});