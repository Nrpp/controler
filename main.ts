input.onPinPressed(TouchPin.P0, function () {
    // Cambiar / Reproducir Musica
    radio.sendNumber(7)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Parar del todo
    girando = false
    radio.sendNumber(5)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    // Claxon
    radio.sendNumber(6)
})
input.onGesture(Gesture.Shake, function () {
    // Atrás
    girando = false
    radio.sendNumber(2)
})
let girando = false
radio.setGroup(5)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        // Adelante
        radio.sendNumber(1)
        girando = false
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.A)) {
        // Girando izquierda mientras se mantiene pulsado
        radio.sendNumber(3)
        girando = true
        basic.pause(100)
    } else if (input.buttonIsPressed(Button.B)) {
        // Girando derecha mientras se mantiene pulsado
        radio.sendNumber(4)
        girando = true
        basic.pause(100)
    } else if (girando) {
        // Al soltar A o B, avisa que terminó el giro (código 8)
        radio.sendNumber(8)
        girando = false
    }
})
