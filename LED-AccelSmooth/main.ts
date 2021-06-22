input.onGesture(Gesture.TiltRight, function () {
    while (input.isGesture(Gesture.TiltRight)) {
        led.unplot(x, 2)
        x = Math.constrain(x + 1, 0, 4)
        led.plot(x, 2)
        basic.pause(200)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    while (input.isGesture(Gesture.TiltLeft)) {
        led.unplot(x, 2)
        x = Math.constrain(x - 1, 0, 4)
        led.plot(x, 2)
        basic.pause(200)
    }
})
let x = 0
basic.clearScreen()
x = 2
led.plot(x, 2)
