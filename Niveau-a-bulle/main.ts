let gx = 0
let gy = 0
basic.forever(function () {
    gx = 0
    gy = 0
    for (let index = 0; index < 4; index++) {
        gx = gx + input.acceleration(Dimension.X)
        gy = gy + input.acceleration(Dimension.Y)
        basic.pause(20)
    }
    gx = gx / 4
    gy = gy / 4
    basic.clearScreen()
    led.plot(Math.map(Math.constrain(gx, -255, 255), -255, 255, 0, 4), Math.map(Math.constrain(gy, -255, 255), -255, 255, 0, 4))
})
