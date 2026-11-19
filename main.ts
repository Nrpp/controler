input.onPinPressed(TouchPin.P0, function () {
    // Cambiar / Reproducir Musica
    radio.sendNumber(7)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Parar
    radio.sendNumber(5)
})
input.onButtonPressed(Button.A, function () {
    // Izquierda
    radio.sendNumber(3)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    // Piiipi (Claxon)
    radio.sendNumber(6)
})
input.onGesture(Gesture.Shake, function () {
    // Atras
    radio.sendNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    // Adelante
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    // Derecha
    radio.sendNumber(4)
})
radio.setGroup(5)
