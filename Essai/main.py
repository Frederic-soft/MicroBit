def on_sound_loud():
    basic.show_leds("""
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        """)
    music.play_melody("C5 A E A C5 A F F ", 120)
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
    soundExpression.giggle.play_until_done()
    basic.pause(5000)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

pins.servo_write_pin(AnalogPin.P1, 180)
basic.pause(1000)
pins.servo_write_pin(AnalogPin.P1, 0)
basic.pause(1000)
pins.servo_write_pin(AnalogPin.P1, 90)
basic.pause(1000)
input.set_sound_threshold(SoundThreshold.LOUD, 132)