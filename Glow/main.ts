let intensite = 0
basic.forever(function () {
    while (intensite < 1023) {
        pins.analogWritePin(AnalogPin.P1, intensite)
        intensite += 1
        basic.pause(1)
    }
    while (intensite > 0) {
        pins.analogWritePin(AnalogPin.P1, intensite)
        intensite += -1
        basic.pause(1)
    }
})
