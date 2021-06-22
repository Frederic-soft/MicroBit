let distance = 0
basic.forever(function on_forever() {
    
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.Centimeters)
    if (distance < 100) {
        music.ringTone(Math.map(distance, 0, 100, 440, 100))
    } else {
        music.stopAllSounds()
    }
    
    basic.pause(100)
})
