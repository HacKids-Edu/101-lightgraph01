basic.clearScreen()
basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
