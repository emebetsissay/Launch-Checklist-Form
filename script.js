// Write your JavaScript code here!



window.addEventListener("load", function () {


    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {

        response.json().then(function (json) {
            let index = Math.round(Math.random() * 6);
            const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML =
                `<h2 text-align: center>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[index].name}</li>
                    <li>Diameter: ${json[index].diameter}</li>
                    <li>Star: ${json[index].star}</li>
                    <li>Distance from Earth: ${json[index].distance}</li>
                    <li>Number of Moons: ${json[index].moons}</li>
                </ol>
                    <img src=${json[index].image}>`;

        });


    });


    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilot_name = document.querySelector("input[name=pilotName]");
        let CoPilot_name = document.querySelector("input[name=copilotName");
        let Fule_level = document.querySelector("input[name=fuelLevel");
        let Cargo_mass = document.querySelector("input[name=cargoMass");


        if (pilot_name.value === "" || CoPilot_name.value === "" || Fule_level.value === "" || Cargo_mass.value === "") {
            alert("All fields are required!");
            // stop the form submission
            //event.preventDefault();
        }

        else if (!(pilot_name.value === "" || CoPilot_name.value === "" || Fule_level.value === "" || Cargo_mass.value === "")) {

            if (isNaN(Fule_level.value) || isNaN(Cargo_mass.value)) {
                alert("A number must be entered for Fule Level and Cargo Mass ");
              //  event.preventDefault();
            }

            else if (!isNaN(pilot_name.value) || !isNaN(CoPilot_name.value)) {
                alert("A number can not be entered for Pilot Name and Co-pilot Name ");
             //   event.preventDefault();
            }





            document.getElementById("pilotStatus").innerHTML = "Pilot " + pilot_name.value + " is Ready launch";
            document.getElementById("copilotStatus").innerHTML = "CoPilot " + CoPilot_name.value + " is Ready launch";

            Fule_level.value = parseInt(Fule_level.value);
            Cargo_mass.value = parseInt(Cargo_mass.value);

            if (Fule_level.value < 10000 && Cargo_mass.value <= 10000) {
                document.getElementById("faultyItems").style.visibility = 'visible';
                document.getElementById("fuelStatus").innerHTML = "Fuel level to low for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
            //    event.preventDefault();

            }

            else if (Cargo_mass.value > 10000 && Fule_level.value >= 10000) {
                document.getElementById("faultyItems").style.visibility = 'visible';
                document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
             //   event.preventDefault();
            }

            else if (Fule_level.value < 10000 && Cargo_mass.value > 10000) {
                document.getElementById("faultyItems").style.visibility = 'visible';
                document.getElementById("fuelStatus").innerHTML = "Fuel level to low for launch";
                document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatus").style.color = "red";
            }

            else {
                document.getElementById("faultyItems").style.visibility = 'visible';
                document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
                document.getElementById("launchStatus").style.color = "green";
            //    event.preventDefault();
            }
        }
        event.preventDefault();
    });

});