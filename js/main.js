var
    batteryStatus = new BatteryStatus(),
    batteryLevel = batteryStatus.getBatteryLevel(),
    isCharging = batteryStatus.isCharging(),
    chargingTime = batteryStatus.getChargingTime(),
    dischargingTime = batteryStatus.getDischargingTime(),
    levelDiv = document.getElementById("levelDiv"),
    chargingDiv = document.getElementById("chargingDiv"),
    chargingTimeDiv = document.getElementById("chargingTimeDiv"),
    chargeTime;

chargingDiv.innerHTML = "Charging: " + isCharging;
levelDiv.innerHTML = batteryLevel;

if (isCharging === false) {
   //Battery is charged or near 100%
    if (dischargingTime !== Infinity) {
        //Battery is discharging
        chargeTime = "Discharge Time: " + formatTime(dischargingTime);
    }
} else {
   //Battery is charging
    if (chargingTime !== Infinity) {
        //Battery still needs to be charged
        chargeTime = "Charge Time: " + formatTime(chargingTime);
    }
}
chargingTimeDiv.innerHTML = chargeTime;

batteryStatus.onChargingChange(updateStatus);
batteryStatus.onLevelChange(updateStatus);
batteryStatus.onChargeTimeChange(updateStatus);
batteryStatus.onDischargeTimeChange(updateStatus);

function updateStatus() {
    batteryLevel = batteryStatus.getBatteryLevel();
    isCharging = batteryStatus.isCharging();

    if (isCharging === false) {
        //Battery is charged or near 100%
        if (dischargingTime !== Infinity) {
            //Battery is discharging
            chargeTime = "Discharge Time: " + formatTime(dischargingTime);
        }
    } else {
        //Battery is charging
        if (chargingTime !== Infinity) {
            //Battery still needs to be charged
            chargeTime = "Charge Time: " + formatTime(chargingTime);
        }
    }
    chargingTimeDiv.innerHTML = chargeTime;
    console.log("A Battery event has occurred!");
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
    console.log("time: " + time);
    return time;
}
