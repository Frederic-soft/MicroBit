radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == MonNumero) {
        MonNumero += 1
        radio.sendNumber(MonNumero)
        basic.showNumber(MonNumero)
        if (MonNumero > NumeroMax) {
            NumeroMax = MonNumero
        }
    }
    if (receivedNumber > NumeroMax) {
        NumeroMax = receivedNumber
    }
})
let MonNumero = 0
let NumeroMax = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
radio.sendString("Hello")
NumeroMax = 0
MonNumero = 0
radio.sendNumber(MonNumero)
basic.showNumber(MonNumero)
basic.forever(function () {
    led.setBrightness(255)
    basic.showNumber(MonNumero)
    basic.pause(1000)
    led.setBrightness(64)
    basic.showNumber(NumeroMax)
    basic.pause(1000)
})
