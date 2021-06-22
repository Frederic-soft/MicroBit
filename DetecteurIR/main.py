def on_forever():
    if input.pin_is_pressed(TouchPin.P2):
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
