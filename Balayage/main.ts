basic.forever(function () {
    for (let pas = 0; pas <= 10; pas++) {
        basic.clearScreen()
        for (let pix = 0; pix <= 4; pix++) {
            led.plot(pix, pas - pix - 1)
        }
        basic.pause(100)
    }
    for (let pas = 0; pas <= 10; pas++) {
        basic.clearScreen()
        for (let pix = 0; pix <= 4; pix++) {
            led.plot(pix, 10 - pas - pix - 1)
        }
        basic.pause(100)
    }
})
