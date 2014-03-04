function BatteryStatus() {

    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

    this.getBatteryLevel = function() {
        return battery.level * 100 + "%";
    }

    this.isCharging = function() {
        return battery.charging;
    }

    this.getChargingTime = function() {
        return battery.chargingTime;
    }

    this.getDischargingTime = function() {
        return battery.dischargingTime;
    }

    this.onChargingChange = function(callback) {
        attachEventListener(battery, "chargingchange", callback);
    }

    this.onLevelChange = function(callback) {
        attachEventListener(battery, "levelchange", callback);
    }

    //////////////////
    ////UTILS
    /////////////////
    function attachEventListener(eventTarget, eventType, eventHandler) {
        if (eventTarget.addEventListener) {
            eventTarget.addEventListener(eventType, eventHandler, false);
        } else if (eventTarget.attachEvent) {
            eventType = "on" + eventType;
            eventTarget.attachEvent(eventType, eventHandler);
        } else {
            eventTarget["on" + eventType] = eventHandler;
        }
    }
}