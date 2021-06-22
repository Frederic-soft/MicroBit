basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) < 15) {
        music.ringTone(440)
        basic.pause(500)
    } else {
        music.stopAllSounds()
    }
})
