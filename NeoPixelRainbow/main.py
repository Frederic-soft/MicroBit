cercle = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
cercle.show_color(neopixel.colors(NeoPixelColors.RED))
basic.pause(500)
cercle.show_color(neopixel.colors(NeoPixelColors.GREEN))
basic.pause(500)
cercle.show_color(neopixel.colors(NeoPixelColors.BLUE))
basic.pause(500)
cercle.show_color(neopixel.colors(NeoPixelColors.WHITE))
basic.pause(500)
cercle.show_rainbow(1, 360)
while True:
    for index in range(361):
        cercle.show_rainbow(index + 1, index + 360)
        basic.pause(2)

def on_forever():
    pass
basic.forever(on_forever)
