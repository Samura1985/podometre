const OBJECTIU_PASSOS = 2000
const PAS_MIN = 0.4
const PAS_MAX = 1.0
const PAS_INCREMENT = 0.05

function mostraPassos() {
    basic.showString("Passes ")
    basic.showNumber(Passes)
    basic.pause(1000)
    basic.clearScreen()
}

function ajustaLlargada(delta: number) {
    llargadaPas = Math.min(Math.max(llargadaPas + delta, PAS_MIN), PAS_MAX)
    basic.showString("Pas ")
    basic.showNumber(Math.round(llargadaPas * 100))
    basic.showString("cm")
    basic.pause(750)
    basic.clearScreen()
}

function mostraObjectiu() {
    if (Passes >= OBJECTIU_PASSOS) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showNumber(OBJECTIU_PASSOS - Passes)
        basic.showString("rest")
    }
}

function calculaIDisplayDistancia() {
    Distància = Passes * llargadaPas
    basic.showString("D=")
    basic.showNumber(Distància)
    basic.showString("m")
    basic.pause(1000)
    mostraObjectiu()
    basic.clearScreen()
}

input.onButtonPressed(Button.A, function () {
    mostraPassos()
})
input.onButtonPressed(Button.B, function () {
    calculaIDisplayDistancia()
})
input.onButtonPressed(Button.AB, function () {
    Passes = 0
    Distància = 0
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    Passes += 1
    basic.showNumber(Passes)
    if (Passes >= OBJECTIU_PASSOS) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    ajustaLlargada(-PAS_INCREMENT)
})
input.onGesture(Gesture.TiltRight, function () {
    ajustaLlargada(PAS_INCREMENT)
})

let llargadaPas = 0.7
let Distància = 0
let Passes = 0
