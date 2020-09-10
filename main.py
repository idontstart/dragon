""" 
Title: Dragon Flap
Creator: Elijah S
Description: Flappy Bird clone with a dragon.
"""
#setup
info.set_life(3)
info.set_score(0)
#TODO add backgroud
#TODO add lava/fire

#make dragon 
Dragon = sprites.create(img("""
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
"""))
Dragon.x = 40
Dragon.ay = 150

def on_flap():
    Dragon.vy = -100
controller.A.on_event(ControllerButtonEvent.PRESSED, on_flap)

def on_update():
    y = Dragon.y
    if y > scene.screen_height():
        die()
    elif y < 0:
        Dragon.y = 0
game.on_update(on_update)

def die():
    info.change_life_by(-1)
    Dragon.y = scene.screen_height()/2
    Dragon.vy = 0

#make chains

#detect collision