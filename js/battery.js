/* Variables
-------------------------------------------------- */
const roboImage = document.querySelector('#roboImage');

/* Functions
-------------------------------------------------- */
function updateBatteryStatus(battery) {
    // STEP 3b: Update the charging status
    if (battery.charging === true) {
        roboImage.src = `https://robohash.org/100.png`;
    } else {
        roboImage.src = `https://robohash.org/${battery.level * 100}.png`;
    }
    // STEP 3c: Update the charge level
    chargeLevel.textContent = (battery.level * 100) + "%";
    chargeMeter.value = battery.level * 100;
}

/* Main
-------------------------------------------------- */
navigator.getBattery().then(battery => {
    console.log(battery);
    updateBatteryStatus(battery);
    battery.addEventListener("chargingchange", () => {
        updateBatteryStatus(battery);
    });
    battery.addEventListener("levelchange", () => {
        updateBatteryStatus(battery);
    });
})