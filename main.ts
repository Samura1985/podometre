input.onButtonPressed(Button.A, function () {
    basic.showString("Passes ")
    basic.showString("" + (Passes))
    basic.pause(1000)
    basic.showString("")
})
input.onGesture(Gesture.Shake, function () {
    Passes += 1
    basic.showString("" + (Passes))
})
input.onButtonPressed(Button.AB, function () {
    Passes = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("D=")
    Distància = Passes * 0.7
    basic.showNumber(Distància)
    basic.pause(1000)
    basic.showString("")
})
let Distància = 0
let Passes = 0
Passes = 0
