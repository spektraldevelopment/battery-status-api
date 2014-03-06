var
    batteryStatus = new BatteryStatus(),
    batteryLevel = batteryStatus.getBatteryLevel(),
    isCharging = batteryStatus.isCharging(),
    chargingTime = batteryStatus.getChargingTime(),
    dischargingTime = batteryStatus.getDischargingTime(),
    levelDiv = document.getElementById("levelDiv"),
    chargingDiv = document.getElementById("chargingDiv"),
    chargingTimeDiv = document.getElementById("chargingTimeDiv"),
    dischargingTimeDiv = document.getElementById("dischargingTimeDiv"),
    chargeTime, dischargeTime;

chargingDiv.innerHTML = "Charging: " + isCharging;
levelDiv.innerHTML = batteryLevel;

if (chargingTime === Infinity) {
    chargeTime = "Charged"
} else {
    chargeTime = formatTime(chargingTime);
}
chargingTimeDiv.innerHTML = "Charge Time: " + chargeTime;

if (dischargingTime === Infinity) {
    dischargeTime = "Plugged In"
} else {
    dischargeTime = formatTime(dischargingTime);
}
//dischargingTimeDiv.innerHTML = "Discharge Time: " + dischargeTime;

batteryStatus.onChargingChange(updateStatus);
batteryStatus.onLevelChange(updateStatus);
batteryStatus.onChargeTimeChange(updateStatus);
batteryStatus.onDischargeTimeChange(updateStatus);

function updateStatus() {
    batteryLevel = batteryStatus.getBatteryLevel();
    isCharging = batteryStatus.isCharging();
    chargingTime = batteryStatus.getChargingTime();
    dischargeTime = batteryStatus.getDischargingTime();

    levelDiv.innerHTML = batteryLevel;
    chargingDiv.innerHTML = "Charging: " + isCharging;

    if (chargingTime !== Infinity) {
        chargeTime = formatTime(chargingTime);
    }
    chargingTimeDiv.innerHTML = "Charge Time: " + chargeTime;

    if (dischargingTime !== Infinity) {
        dischargeTime = formatTime(dischargingTime);
    }
    dischargingTimeDiv.innerHTML = "Discharge Time: " + dischargeTime;
}

//batteryStatus.onChargingChange(chargingChange);
//
//function chargingChange(evt) {
//    isCharging = batteryStatus.isCharging();
//    chargingDiv.innerHTML = "Charging: " + isCharging;
//}
//
//batteryStatus.onLevelChange(batteryLevelChange);
//
//function batteryLevelChange(evt) {
//    batteryLevel = batteryStatus.getBatteryLevel();
//    levelDiv.innerHTML = batteryLevel;
//}
//
//batteryStatus.onChargeTimeChange(chargeTimeChange);
//
//function chargeTimeChange() {
//    chargingDiv.innerHTML = "Charging: " + isCharging;
//
//    chargingTime = batteryStatus.getChargingTime();
//    if (chargingTime === Infinity) {
//        chargeTime = "Charged";
//    } else {
//        chargeTime = formatTime(chargingTime);
//    }
//    chargingTimeDiv.innerHTML = "Charge Time: " + chargeTime;
//}

//batteryStatus.onDischargeTimeChange(dischargeTimeChange);
//
//function dischargeTimeChange() {
//    dischargingTime = batteryStatus.getDischargingTime();
//    if (dischargingTime === Infinity) {
//        dischargeTime = "Plugged In"
//    } else {
//        dischargeTime = formatTime(dischargingTime);
//    }
//    dischargingTimeDiv.innerHTML = "Discharge Time: " + dischargeTime;
//}

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
