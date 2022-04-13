// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");


window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        const random = Math.floor(Math.random()* 6)
        addDestinationInfo(document, listedPlanets[random].name, listedPlanets[random].diameter, listedPlanets[random].star, listedPlanets[random].distance, listedPlanets[random].moons, listedPlanets[random].image)
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    let form = document.querySelector("form");
    let list =  document.getElementById("faultyItems");
        form.addEventListener("submit", function(event) {
        event.preventDefault();
        let userInputPilot = document.querySelector("input[name=pilotName]");
        let userInputCoPilot = document.querySelector("input[name=copilotName]");
        let userInputFuelLevel = document.querySelector("input[name=fuelLevel]");
        let userInputCargoMass = document.querySelector("input[name=cargoMass]");
//VALIDATION only below/
formSubmission(document, list, userInputPilot.value, userInputCoPilot.value, userInputFuelLevel.value, userInputCargoMass.value);
    

    })
})
// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
 document.getElementById("missionTarget").innerHTML =
               `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons:  ${moons}</li>
                </ol>
                <img src=${imageUrl}>`

}

function validateInput(testInput) {
 if (testInput === "") {
    return "Empty"};

if (isNaN(testInput)) {
    return "Not a Number"};

if (!isNaN(testInput)) {
    return "Is a Number"};
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    if (validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "Empty"){
        alert("Please make sure you enter all fields!")

    } else if (validateInput(Number(pilot)) == "Is a Number" || validateInput(Number(copilot)) == "Is a Number" ){
        alert("You cannot enter a number for PILOT or CO PILOT name. Please resubmit.")

    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
        alert("You must enter a number for your FUEL LEVEL and CARGO MASS.")
    }       

    else {
        list.style.visibility = "visible";

//VALIDATION only above/


        pilotStatus.innerHTML = `Pilot ${pilot} is ready!`
        copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready!`
        if (Number(fuelLevel) < 10000){
        fuelStatus.style.color="red"
        fuelStatus.innerHTML="Shuttle not ready for launch. Fuel is too low."}
        else {
            fuelStatus.style.color="green";
        }

        if (Number(cargoLevel) > 10000){
            document.getElementById("cargoStatus").style.color="red"
            document.getElementById("cargoStatus").innerHTML="Shuttle not ready for launch. Cargo Mass is too high."}   
            else {
                document.getElementById("cargoStatus").style.color="green";}
            }
        }
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json"
    ).then( function(response) {
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }

        });

    return planetsReturned;
}

function pickPlanet(planets) {




//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = myFetch();
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
};
