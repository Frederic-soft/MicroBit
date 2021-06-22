input.onButtonPressed(Button.A, function () {
    led.unplot(x, 2)
    x = Math.constrain(x - 1, 0, 4)
    led.plot(x, 2)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 2)
    x = Math.constrain(x + 1, 0, 4)
    led.plot(x, 2)
})
let x = 0
basic.clearScreen()
x = 2
led.plot(x, 2)
