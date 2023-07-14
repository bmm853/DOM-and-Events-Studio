// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const status = document.getElementById("flightStatus");
    const backgroundColor = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    takeoffButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            status.innerHTML = "Shuttle in flight";
            backgroundColor.style.background = "blue";
            height.innerHTML = Number(height.innerHTML) + 10000; 
        }
    });

    landButton.addEventListener("click",function() {
        let response = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed";
        backgroundColor.style.background = "";
        height.innerHTML = 0;
        rocket.style.left = "0px";
        rocket.style.bottom = "0px";
    });

    abortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            status.innerHTML = "Mission aborted.";
            backgroundColor.style.background = "";
            height.innerHTML = 0; 
            rocket.style.left = "0px";
            rocket.style.bottom = "0px";
        }
    }); 

    upButton.addEventListener("click", function() {
        height.innerHTML = Number(height.innerHTML) + 10000;
        if (parseInt(rocket.style.bottom) < 240) {
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px"; 
        }
    });

    downButton.addEventListener("click", function() {
        if (Number(height.innerHTML) > 0) {
            height.innerHTML = Number(height.innerHTML) - 10000; 
            if (parseInt(rocket.style.bottom) > 0) {
                rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
            }
        }
    });

    leftButton.addEventListener("click", function() {
        if (parseInt(rocket.style.left) > 0){
            rocket.style.left = parseInt(rocket.style.left) - 10 + "px"; 
        }
    });

    rightButton.addEventListener("click", function() {
        if (parseInt(rocket.style.left) < 380) {
            rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    });

});