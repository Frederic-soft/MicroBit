def on_forever():
    pins.servo_write_pin(AnalogPin.P1,
        Math.map(pins.analog_read_pin(AnalogPin.P2), 0, 1023, 0, 180))
basic.forever(on_forever)
