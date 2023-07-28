// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        listedPlanets.json();
//        console.log(listedPlanets);
//    }).then(function (json) {
//        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
     //  pickPlanet(listedPlanets);
      // addDestinationInfo();
   //});

    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {;
        let list = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let ready = true;

        if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoLevelInput.value === "") {
            window.alert("All fields are required!");
            event.preventDefault();
        } else if (validateInput(pilotInput.value) !== "Not a Number" || validateInput(copilotInput.value) !== "Not a Number") {
            window.alert("Pilot and Copilot names must be all letters.")
            event.preventDefault();
        } else if(validateInput(fuelLevelInput.value) === "Not a Number" || validateInput(cargoLevelInput.value) === "Not a Number") {
            window.alert("Please enter only numbers for fuel level and cargo mass.");
            event.preventDefault();
        } 

        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotInput.value + ' '} is ready for launch`;
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotInput.value + ' '} is ready for launch`;
        list.style.visibility = "visible";
       
        if (fuelLevelInput.value < 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            ready = false;
            event.preventDefault();
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            event.preventDefault();
        }
    
        if (cargoLevelInput.value > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            ready = false;
            event.preventDefault();
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            event.preventDefault();
        }

        if (ready === true) {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle Ready for Launch";
            event.preventDefault();
        }
        event.preventDefault();
    });
});


