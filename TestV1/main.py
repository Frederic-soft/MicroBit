if randint(0, 10) >= 5:
    basic.show_leds("""
        . . . # #
        . . . # #
        . . # . .
        . # . . .
        # . . . .
        """)
else:
    basic.show_leds("""
        . . . . #
        . . . # .
        # . # . .
        # # . . .
        # # # . .
        """)
music.ring_tone(Note.C)

def on_forever():
    pass
basic.forever(on_forever)
