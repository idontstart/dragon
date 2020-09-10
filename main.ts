/**  
Title: Dragon Flap
Creator: Elijah S
Description: Flappy Bird clone with a dragon.

 */
// setup
info.setLife(3)
info.setScore(0)
// TODO add backgroud
// TODO add lava/fire
// make dragon 
let Dragon = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`)
Dragon.x = 40
Dragon.ay = 150
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_flap() {
    Dragon.vy = -100
})
game.onUpdate(function on_update() {
    let y = Dragon.y
    if (y > scene.screenHeight()) {
        die()
    } else if (y < 0) {
        Dragon.y = 0
    }
    
})
function die() {
    info.changeLifeBy(-1)
    Dragon.y = scene.screenHeight() / 2
    Dragon.vy = 0
}

