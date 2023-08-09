// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name} </li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${image}">
            `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } 
    if (isNaN(testInput)) {
        return "Not a Number";
    } 
    if (!isNaN(testInput)){
        return "Is a Number";
    }
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) { 
        
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatusText = document.getElementById("launchStatus");
    let launchStatusStyle = document.querySelector("#launchStatus")

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required!");
        return false;
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter only numbers for fuel level and cargo mass.")
        return false;
    } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Pilot and Copilot names must be all letters, no numbers please.");
        return false;
    } 

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    if (fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = "Fuel level too low for launch";
        fuelStatus.style.color = "rgb(199, 37, 78)";
        cargoStatus.textContent = "Cargo mass too heavy for launch";
        cargoStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        return false;
    } else if (Number(fuelLevel) < 10000) {
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "rgb(199, 37, 78)";
        fuelStatus.textContent = "Fuel level too low for launch";
        fuelStatus.style.color = "rgb(199, 37, 78)";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        cargoStatus.style.color = "white";
        list.style.visibility = "visible";
       return false;
    } else if (Number(cargoLevel) > 10000){
        launchStatusText.textContent = "Shuttle Not Ready for Launch";
        launchStatusStyle.style.color = "#C7254E"
        cargoStatus.textContent = "Cargo mass too heavy for launch";
        cargoStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
        fuelStatus.textContent = "Fuel level high enough for launch";
        fuelStatus.style.color = "white";
        return false;
    } else {
        launchStatusStyle.style.color = "rgb(65, 159, 106)";
        launchStatusText.textContent = "Shuttle is Ready for Launch";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        cargoStatus.style.color = "white";
        fuelStatus.textContent = "Fuel level high enough for launch";
        fuelStatus.style.color = "white";
        list.style.visibility = "visible";
        return true;
    }  
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    }); 
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;