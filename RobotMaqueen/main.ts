let distance = 0
basic.showIcon(IconNames.Happy)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 32)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 96)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 96)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 32)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 96)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 96)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
    distance = 0
    for (let index = 0; index < 4; index++) {
        distance = distance + maqueen.Ultrasonic(PingUnit.Centimeters)
    }
    distance = distance / 4
    if (distance < 15) {
        basic.showIcon(IconNames.Skull)
        maqueen.motorStop(maqueen.Motors.All)
        if (randint(0, 9) < 5) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 96)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 96)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 96)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 96)
        }
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        basic.showIcon(IconNames.Happy)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
})
