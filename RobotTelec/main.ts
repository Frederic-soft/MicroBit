radio.onReceivedValue(function (name, value) {
    if (name == "FORWARD") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 127)
        direction = 1
    } else if (name == "BACKWARD") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 127)
        direction = -1
    } else if (name == "STOP") {
        maqueen.motorStop(maqueen.Motors.All)
        direction = 0
    } else if (name == "LEFT") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 127)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 127)
        basic.pause(200)
        if (direction == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        } else if (direction == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 127)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 127)
        }
    } else if (name == "RIGHT") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 127)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 127)
        basic.pause(200)
        if (direction == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        } else if (direction == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 127)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 127)
        }
    } else {
        basic.showIcon(IconNames.Confused)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)
    }
})
let direction = 0
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
radio.setGroup(1)
radio.sendString("Hello")
direction = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
