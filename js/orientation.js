/* Variables
-------------------------------------------------- */
const alphaSlider = document.querySelector('#alpha input[type="range"]');
const alphaValue = document.querySelector('#alpha output');
const betaSlider = document.querySelector('#beta input[type="range"]');
const betaValue = document.querySelector('#beta output');
const gammaSlider = document.querySelector('#gamma input[type="range"]');
const gammaValue = document.querySelector('#gamma output');
const statusMsg = document.querySelector('#status');

/* Functions
-------------------------------------------------- */
function error() {
    statusMsg.textContent = "Device orientation API is not supported by your browser.";
}

/* Script Logic
-------------------------------------------------- */
if (!window.DeviceOrientationEvent) {
    error();
} else {
    window.addEventListener("deviceorientation", function (event) {
        console.log(event);
        alphaValue.textContent = Math.round(event.alpha) + "°";
        alphaSlider.value = Math.round(event.alpha);
        betaValue.textContent = Math.round(event.beta) + "°";
        betaSlider.value = Math.round(event.beta);
        gammaValue.textContent = Math.round(event.gamma) + "°";
        gammaSlider.value = Math.round(event.gamma);
    })
}