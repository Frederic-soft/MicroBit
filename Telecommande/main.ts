input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("BACKWARD", 1)
    basic.showArrow(ArrowNames.South)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("RIGHT", 1)
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("LEFT", 1)
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("STOP", 1)
    basic.showIcon(IconNames.No)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendValue("FORWARD", 1)
    basic.showArrow(ArrowNames.North)
})
radio.setTransmitPower(7)
radio.setGroup(1)
radio.setFrequencyBand(0)
radio.sendString("Hello")
basic.forever(function () {
	
})
