function afficherChoix () {
    if (choix == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
    } else if (choix == 1) {
        basic.showLeds(`
            # # . . .
            # . # # .
            . # . # .
            . # # # .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    choixEnvoyé = 1
    envoyerChoix()
})
function envoyerChoix () {
    radio.sendValue("hifumi", choix)
    soundExpression.hello.play()
}
input.onButtonPressed(Button.B, function () {
    choix = (choix + 1) % 3
    afficherChoix()
})
radio.onReceivedValue(function (name, value) {
    if (name == "hifumi") {
        if (choixEnvoyé == 0) {
            envoyerChoix()
        }
        if (choix == (value + 1) % 3) {
            basic.showIcon(IconNames.Happy)
        } else if (choix == value) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.pause(2000)
        afficherChoix()
    }
    choixEnvoyé = 0
})
let choix = 0
let choixEnvoyé = 0
choixEnvoyé = 0
radio.setTransmitPower(7)
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.sendString("Hello")
choix = 0
afficherChoix()
