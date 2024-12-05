let repeat: number[] = []
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        repeat = [0, 4]
        for (let value of repeat) {
            basic.showString("MERRY CHRISTMAS")
        }
    }
})
