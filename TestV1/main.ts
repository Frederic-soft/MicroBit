if (randint(0, 10) >= 5) {
    basic.showLeds(`
        . . . # #
        . . . # #
        . . # . .
        . # . . .
        # . . . .
        `)
} else {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        # # . . .
        # # # . .
        `)
}
music.ringTone(262)
basic.pause(500)
music.stopAllSounds()
basic.forever(function () {
	
})
