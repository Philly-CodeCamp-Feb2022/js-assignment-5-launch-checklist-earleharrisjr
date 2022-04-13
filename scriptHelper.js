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
 if (testInput === "") {
    return "Empty"};

if (isNaN(testInput)) {
    return "Not a Number"};

if (!isNaN(testInput)) {
    return "Is a Number"};
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // document.getElementById("pilotStatus").innerHTML = `Pilot ${userInputPilot.value} is ready!`
    // document.getElementById("pilotStatus").innerHTML = `Co-Pilot ${userInputCoPilot.value} is ready!`
    // if (Number(userInputFuelLevel.value) < 10000){
    // document.getElementById("fuelStatus").style.color="red"
    // document.getElementById("fuelStatus").innerHTML="Shuttle not ready for launch. Fuel is too low."}
    // else {
    //     document.getElementById("fuelStatus").style.color="green";
    // }

    // if (Number(userInputCargoMass.value) > 10000){
    //     document.getElementById("cargoStatus").style.color="red"
    //     document.getElementById("cargoStatus").innerHTML="Shuttle not ready for launch. Cargo Mass is too high."}   
    //     else {
    //         document.getElementById("cargoStatus").style.color="green";}

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
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
