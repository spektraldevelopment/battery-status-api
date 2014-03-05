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

console.log("batteryLevel: " + batteryLevel);
console.log("isCharging: " + isCharging);
console.log("chargingTime: " + chargingTime);
console.log("dischargingTime: " + dischargingTime);

batteryStatus.onChargingChange(chargingChange);

function chargingChange(evt) {
    isCharging = batteryStatus.isCharging();
    console.log("chargingChange: " + isCharging);
}

batteryStatus.onLevelChange(batteryLevelChange);

function batteryLevelChange(evt) {
    batteryLevel = batteryStatus.getBatteryLevel();
    console.log("batteryLevelChange: " + batteryLevel);
}

batteryStatus.onChargeTimeChange(chargeTimeChange);

function chargeTimeChange() {
    chargingTime = batteryStatus.getChargingTime();
}

batteryStatus.onDischargeTimeChange(dischargeTimeChange);

function dischargeTimeChange() {
    dischargingTime = batteryStatus.getDischargingTime()
}


