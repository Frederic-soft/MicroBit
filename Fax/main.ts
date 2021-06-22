radio.onReceivedNumber(function (receivedNumber) {
    if (reception == 1) {
        if (receivedNumber == 1) {
            led.plot(x, y)
        } else {
            led.unplot(x, y)
        }
        x += 1
        if (x > 4) {
            x = 0
            y += 1
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("START", 1)
    basic.pause(100)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (led.point(x, y)) {
                radio.sendNumber(1)
            } else {
                radio.sendNumber(0)
            }
            basic.pause(100)
        }
    }
    radio.sendValue("STOP", 1)
})
input.onButtonPressed(Button.B, function () {
    if (icone == 0) {
        basic.showIcon(IconNames.Heart)
    } else {
        if (icone == 1) {
            basic.showIcon(IconNames.House)
        } else {
            if (icone == 2) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
    icone = (icone + 1) % 4
})
radio.onReceivedValue(function (name, value) {
    if (name == "START") {
        x = 0
        y = 0
        reception = 1
        soundExpression.happy.play()
        basic.clearScreen()
    }
    if (name == "STOP") {
        x = 0
        y = 0
        reception = 0
        soundExpression.sad.play()
    }
})
let y = 0
let x = 0
let reception = 0
let icone = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
radio.sendString("Hello")
icone = 0
