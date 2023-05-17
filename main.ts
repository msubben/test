controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(5)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(2)
})
scene.setBackgroundColor(1)
