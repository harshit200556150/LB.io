/* Variables
-------------------------------------------------- */
const latitude = document.querySelector('#latlong dd:nth-of-type(1)');
const longitude = document.querySelector('#latlong dd:nth-of-type(2)');
const statusMsg = document.querySelector('#status');
const mapLink = document.querySelector('#mapLink');

/* Functions
-------------------------------------------------- */
function success(position) {
    statusMsg.textContent = "We found you!";
    console.log(position);
    latitude.textContent = position.coords.latitude + "°";
    longitude.textContent = position.coords.longitude + "°";
    const url = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    mapLink.setAttribute("href", url);
    mapLink.setAttribute("target", "_blank");
    mapLink.textContent = "Open on Map";
}

function error() {
    statusMsg.textContent = "Sorry! Not able to find your location.";
}

/* Script Logic
-------------------------------------------------- */
if (!navigator.geolocation) {
    statusMsg.textContent = "Geolocation is not supported by your browser!";
} else {
    statusMsg.textContent = "Loading...";
    console.log(navigator.geolocation);
    navigator.geolocation.getCurrentPosition(success, error);
}