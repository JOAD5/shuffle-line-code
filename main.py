def Stop():
    kitronik_motor_driver.motor_off(kitronik_motor_driver.Motors.MOTOR1)
    kitronik_motor_driver.motor_off(kitronik_motor_driver.Motors.MOTOR2)
V1 = False
Speed = 40
kitronik_motor_driver.motor_on(kitronik_motor_driver.Motors.MOTOR1,
    kitronik_motor_driver.MotorDirection.FORWARD,
    Speed)
kitronik_motor_driver.motor_on(kitronik_motor_driver.Motors.MOTOR2,
    kitronik_motor_driver.MotorDirection.FORWARD,
    Speed)

def on_forever():
    global V1
    basic.show_leds("""
        . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
    """)
    if pins.digital_read_pin(DigitalPin.P1) == 1 or pins.digital_read_pin(DigitalPin.P2) == 1:
        Stop()
        basic.pause(500)
        if pins.digital_read_pin(DigitalPin.P1) == 1:
            basic.show_leds("""
                . . # . .
                                . . . # .
                                # # # # #
                                . . . # .
                                . . # . .
            """)
            V1 = True
            while V1:
                kitronik_motor_driver.motor_on(kitronik_motor_driver.Motors.MOTOR2,
                    kitronik_motor_driver.MotorDirection.FORWARD,
                    Speed)
                basic.pause(500)
                Stop()
                basic.pause(500)
                if pins.digital_read_pin(DigitalPin.P2) == 0:
                    V1 = False
        elif True:
            pass
        else:
            pass
    else:
        pass
basic.forever(on_forever)
