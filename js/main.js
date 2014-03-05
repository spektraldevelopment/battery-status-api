var
    batteryStatus = new BatteryStatus(),
    batteryLevel = batteryStatus.getBatteryLevel(),
    isCharging = batteryStatus.isCharging(),
    chargingTime = batteryStatus.getChargingTime(),
    dischargingTime = batteryStatus.getDischargingTime();

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
    console.log("batteryLevelChange: evt: " + evt);
}


