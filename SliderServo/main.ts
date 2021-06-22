basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 0, 180))
})
