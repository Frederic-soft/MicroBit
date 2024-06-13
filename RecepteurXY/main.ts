radio.onReceivedValue(function (name, value) {
    if (name == "Tx") {
        led.unplot(x, y)
        x = value
        led.plot(x, y)
    }
    if (name == "Ty") {
        led.unplot(x, y)
        y = value
        led.plot(x, y)
    }
})
let y = 0
let x = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
radio.sendString("Hello")
x = 0
y = 0
