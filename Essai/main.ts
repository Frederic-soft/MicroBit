input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("C5 A E A C5 A F F ", 120)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    soundExpression.giggle.playUntilDone()
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
pins.servoWritePin(AnalogPin.P1, 180)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 0)
basic.pause(1000)
pins.servoWritePin(AnalogPin.P1, 90)
basic.pause(1000)
input.setSoundThreshold(SoundThreshold.Loud, 132)
