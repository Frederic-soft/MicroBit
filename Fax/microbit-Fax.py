def on_received_number(receivedNumber):
    global x2, y2
    if reception == 1:
        if receivedNumber == 1:
            led.plot(x2, y2)
        else:
            led.unplot(x2, y2)
        x2 += 1
        if x2 > 4:
            x2 = 0
            y2 += 1
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_value("START", 1)
    basic.pause(100)
    for y in range(5):
        for x in range(5):
            if led.point(x, y):
                radio.send_number(1)
            else:
                radio.send_number(0)
            basic.pause(100)
    radio.send_value("STOP", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global icone
    if icone == 0:
        basic.show_icon(IconNames.HEART)
    else:
        if icone == 1:
            basic.show_icon(IconNames.HOUSE)
        else:
            if icone == 2:
                basic.show_icon(IconNames.HAPPY)
            else:
                basic.show_icon(IconNames.SAD)
    icone = (icone + 1) % 4
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global x2, y2, reception
    if name == "START":
        x2 = 0
        y2 = 0
        reception = 1
        basic.clear_screen()
    if name == "STOP":
        x2 = 0
        y2 = 0
        reception = 0
radio.on_received_value(on_received_value)

y2 = 0
x2 = 0
reception = 0
icone = 0
radio.set_transmit_power(7)
radio.set_frequency_band(0)
radio.set_group(1)
radio.send_string("Hello")
icone = 0
