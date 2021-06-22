def on_forever():
    if sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS) < 15:
        music.ring_tone(440)
        basic.pause(500)
    else:
        music.stop_all_sounds()
basic.forever(on_forever)
