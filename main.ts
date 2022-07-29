function Stop () {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
}
let V2 = false
let V1 = false
let Speed = 40
let Turn_Speed = 50
let Pause_Time = 500
kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Speed)
kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Speed)
basic.forever(function () {
    let new_vari: boolean;
basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    if (pins.digitalReadPin(DigitalPin.P1) == 1 || pins.digitalReadPin(DigitalPin.P2) == 1) {
        Stop()
        basic.pause(Pause_Time)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            V1 = true
            while (V1) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Turn_Speed)
                basic.pause(Pause_Time)
                Stop()
                basic.pause(Pause_Time)
                if (pins.digitalReadPin(DigitalPin.P2) == 0) {
                    V1 = false
                }
            }
        } else if (true) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            V2 = true
            while (V2) {
                kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Turn_Speed)
                basic.pause(Pause_Time)
                Stop()
                basic.pause(Pause_Time)
                if (pins.digitalReadPin(DigitalPin.P1) == 0) {
                    V2 = false
                }
            }
        } else {
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Speed)
            kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Speed)
        }
    } else {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, Speed)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, Speed)
    }
})
