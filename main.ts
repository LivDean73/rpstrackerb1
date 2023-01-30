input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    p1 = 0
    p2 = 0
    Ties = 0
    rounds = 0
    OLED.writeStringNewLine("shall we play a game")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("player 1 score: " + p1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score: " + p2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
let rounds = 0
let Ties = 0
let p2 = 0
let p1 = 0
reset()
basic.forever(function () {
	
})
