let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance < 100) {
        music.ringTone(Math.map(distance, 0, 100, 440, 100))
    } else {
        music.stopAllSounds()
    }
    basic.pause(100)
})
