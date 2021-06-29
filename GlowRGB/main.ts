let intensiteR = 1
let pasR = 3
let intensiteG = 1
let pasG = 5
let intensiteB = 1
let pasB = 7
basic.clearScreen()
basic.forever(function () {
    if (intensiteR >= 1023 || intensiteR <= 0) {
        pasR = 0 - pasR
    }
    intensiteR += pasR
    pins.analogWritePin(AnalogPin.P0, intensiteR)
    if (intensiteG >= 1023 || intensiteG <= 0) {
        pasG = 0 - pasG
    }
    intensiteG += pasG
    pins.analogWritePin(AnalogPin.P1, intensiteG)
    if (intensiteB >= 1023 || intensiteB <= 0) {
        pasB = 0 - pasB
    }
    intensiteB += pasB
    pins.analogWritePin(AnalogPin.P2, intensiteB)
})
