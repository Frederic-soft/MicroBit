let de = 0
input.onGesture(Gesture.Shake, function () {
    led.setBrightness(32)
    while (randint(0, 10) < 10) {
        de = randint(1, 6)
        if (de == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        } else {
            if (de == 2) {
                basic.showLeds(`
                    . . . . #
                    . . . . .
                    . . . . .
                    . . . . .
                    # . . . .
                    `)
            } else {
                if (de == 3) {
                    basic.showLeds(`
                        . . . . #
                        . . . . .
                        . . # . .
                        . . . . .
                        # . . . .
                        `)
                } else {
                    if (de == 4) {
                        basic.showLeds(`
                            # . . . #
                            . . . . .
                            . . . . .
                            . . . . .
                            # . . . #
                            `)
                    } else {
                        if (de == 5) {
                            basic.showLeds(`
                                # . . . #
                                . . . . .
                                . . # . .
                                . . . . .
                                # . . . #
                                `)
                        } else {
                            basic.showLeds(`
                                # . # . #
                                . . . . .
                                . . . . .
                                . . . . .
                                # . # . #
                                `)
                        }
                    }
                }
            }
        }
    }
    led.setBrightness(255)
})
