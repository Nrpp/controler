input.onPinPressed(TouchPin.P0, function () {
    // Cambiar / Reproducir Musica
    radio.sendNumber(7)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Parar
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
// Mantiene el giro mientras A o B estén pulsados, y para al soltarlos
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
        // Si acabas de soltar A o B, manda parar
        radio.sendNumber(5)
        girando = false
    }
})
