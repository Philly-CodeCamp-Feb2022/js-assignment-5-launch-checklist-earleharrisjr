// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
if (testInput === ""){
    return "Empty"
};
if (isNaN(testInput)){
    return "Not a Number"
}
if (!isNan(testInput));
return "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus =  document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("coPilotStatus");
    let pilotName = pilot.value
    //below is the pilot / co pilot
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
        window.alert("Please enter data in every field to continue.")
    }
    else if (validateInput(pilot.value) === "Is a Number" || validateInput(copilot.value) === "Is a Number"){
        window.alert("A number is not a name! Pilot and co-pilot must be a name.")
    } else {
        pilotStatus.innerHTML = `${pilot.value} is ready!`;
        pilotStatus = style.visibility = 'visible';
        copilotStatus.innerHTML = `${copilot.value} is ready!`;
        copilotStatus.style.visibility = 'visible';
    }
    //above this line is the pilot / co pilot
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
