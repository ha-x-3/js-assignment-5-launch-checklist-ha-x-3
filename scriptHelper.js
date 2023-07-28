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
    if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof testInput === "number") {
        return "Is a Number";
    } else if (testInput === "") {
        return "Empty";
    }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then( function(json) {
            let index = Math.floor(Math.random() * json.length);
            const div = document.getElementById("missionTarget");
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${json[index].name} </li>
                <li>Diameter: ${json[index].diameter}</li>
                <li>Star: ${json[index].star}</li>
                <li>Distance from Earth: ${json[index].distance}</li>
                <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src=${json[index].image}>
            `
        });
        return planetsReturned;
    }); 
    
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;