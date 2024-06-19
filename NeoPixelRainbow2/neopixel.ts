let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(500)
strip.showRainbow(1, 360)
basic.pause(1000)
while (true) {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
}
