var
    batteryStatus = new BatteryStatus(),
    batteryLevel = batteryStatus.getBatteryLevel(),
    isCharging = batteryStatus.isCharging(),
    chargingTime = batteryStatus.getChargingTime(),
    dischargingTime = batteryStatus.getDischargingTime(),
    levelDiv = document.getElementById("levelDiv"),
    chargingDiv = document.getElementById("chargingDiv"),
    chargingTimeDiv = document.getElementById("chargingTimeDiv"),
    dischargingTimeDiv = document.getElementById("dischargingTimeDiv");

chargingDiv.innerHTML = "Charging: " + isCharging;
levelDiv.innerHTML = batteryLevel;
chargingTimeDiv.innerHTML = "Charge Time: " + formatTime(chargingTime);
dischargingTimeDiv.innerHTML = "Discharge Time: " + formatTime(dischargingTime);

batteryStatus.onChargingChange(chargingChange);

function chargingChange(evt) {
    isCharging = batteryStatus.isCharging();
    chargingDiv.innerHTML = "Charging: " + isCharging;
}

batteryStatus.onLevelChange(batteryLevelChange);

function batteryLevelChange(evt) {
    batteryLevel = batteryStatus.getBatteryLevel();
    levelDiv.innerHTML = batteryLevel;
}

batteryStatus.onChargeTimeChange(chargeTimeChange);

function chargeTimeChange() {
    var chargeTime;
    chargingTime = batteryStatus.getChargingTime();

    if (chargingTime === "Infinity") {
        chargeTime = "Unplugged";
    } else {
        chargeTime = formatTime(chargingTime);
    }

    console.log("chargeTime: " + chargeTime);

    chargingTimeDiv.innerHTML = "Charge Time: " + chargeTime;
}

batteryStatus.onDischargeTimeChange(dischargeTimeChange);

function dischargeTimeChange() {
    dischargingTime = batteryStatus.getDischargingTime();
    dischargingTimeDiv.innerHTML = "Discharge Time: " + formatTime(dischargingTime);
}

function formatTime(time) {
    var
        hours   = Math.floor(time / 3600),
        minutes = Math.floor((time - (hours * 3600)) / 60),
        seconds = time - (hours * 3600) - (minutes * 60), time;

    if (hours   < 10) {hours   = "0" + hours;}
    if (minutes < 10) {minutes = "0" + minutes;}
    if (seconds < 10) {seconds = "0" + seconds;}

    time    = hours + ":" + minutes + ":" + seconds;

    return time;
}
