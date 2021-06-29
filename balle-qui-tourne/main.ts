input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        led.unplot(x, y)
        x += 1
        if (x > 4 && balle == 1) {
            if (numéro == plusgrand) {
                radio.sendValue("BalleG", 0)
            } else {
                radio.sendValue("BalleG", numéro + 1)
            }
            balle = 0
        }
        basic.pause(200)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        led.unplot(x, y)
        x += -1
        if (x < 0 && balle == 1) {
            if (numéro == 0) {
                radio.sendValue("BalleD", plusgrand)
            } else {
                radio.sendValue("BalleD", numéro - 1)
            }
            balle = 0
        }
        basic.pause(200)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "numéro") {
        if (value == numéro) {
            numéro += 1
            radio.sendValue("numéro", numéro)
            if (plusgrand < numéro) {
                plusgrand = numéro
            }
        } else if (value > plusgrand) {
            plusgrand = value
        }
    } else if (name == "BalleG" && value == numéro) {
        x = 0
        balle = 1
    } else if (name == "BalleD" && value == numéro) {
        x = 4
        balle = 1
    } else {
    	
    }
})
let y = 0
let x = 0
let balle = 0
let plusgrand = 0
let numéro = 0
numéro = 0
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.sendString("hello")
plusgrand = 0
radio.sendValue("numéro", numéro)
balle = 1
x = 2
y = 2
basic.forever(function () {
    if (balle == 0) {
        led.setBrightness(255)
        basic.showNumber(numéro)
        basic.pause(1000)
        led.setBrightness(67)
        basic.showNumber(plusgrand)
        basic.pause(1000)
    } else {
        basic.clearScreen()
        led.plot(x, y)
    }
})
