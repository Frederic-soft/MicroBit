input.onGesture(Gesture.TiltRight, function () {
    if (balle == 1) {
        while (input.isGesture(Gesture.TiltRight)) {
            led.unplot(x, y)
            x += 1
            led.plot(x, y)
            if (x > 4) {
                radio.sendValue("BG", voisinD)
                balle = 0
            }
            basic.pause(200)
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (balle == 1) {
        while (input.isGesture(Gesture.TiltLeft)) {
            led.unplot(x, y)
            x += -1
            led.plot(x, y)
            if (x < 0) {
                radio.sendValue("BD", voisinG)
                balle = 0
            }
            basic.pause(200)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (numéro == value) {
        if (name == "BD") {
            balle = 1
            x = 4
            y = 2
            basic.clearScreen()
            led.plot(x, y)
        } else if (name == "BG") {
            balle = 1
            x = 0
            y = 2
            basic.clearScreen()
            led.plot(x, y)
        }
    }
})
let balle = 0
let x = 0
let y = 0
let voisinG = 0
let voisinD = 0
let numéro = 0
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.setTransmitPower(7)
radio.sendString("hello")
numéro = 0
voisinD = numéro + 1
if (voisinD > 4) {
    voisinD = 0
}
voisinG = numéro - 1
if (voisinG < 0) {
    voisinG = 4
}
if (numéro == 0) {
    y = 2
    x = 2
    balle = 1
    led.plot(x, y)
}
basic.forever(function () {
    if (balle == 0) {
        basic.showNumber(numéro)
    }
})
