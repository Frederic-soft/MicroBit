def on_button_pressed_a():
    global x
    led.unplot(x, 2)
    x = Math.constrain(x - 1, 0, 4)
    led.plot(x, 2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global x
    led.unplot(x, 2)
    x = Math.constrain(x + 1, 0, 4)
    led.plot(x, 2)
input.on_button_pressed(Button.B, on_button_pressed_b)

x = 0
basic.clear_screen()
x = 2
led.plot(x, 2)