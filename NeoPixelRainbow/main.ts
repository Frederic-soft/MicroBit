let cercle = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
cercle.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(500)
cercle.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
cercle.showColor(neopixel.colors(NeoPixelColors.Blue))
basic.pause(500)
cercle.showColor(neopixel.colors(NeoPixelColors.White))
basic.pause(500)
cercle.showRainbow(1, 360)
while (true) {
    for (let index = 0; index <= 360; index++) {
        cercle.showRainbow(index + 1, index + 360)
        basic.pause(2)
    }
}
basic.forever(function () {
	
})
