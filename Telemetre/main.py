distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    if distance < 100:
        music.ring_tone(Math.map(distance, 0, 100, 440, 100))
    else:
        music.stop_all_sounds()
    basic.pause(100)
basic.forever(on_forever)
