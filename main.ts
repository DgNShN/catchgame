input.onButtonPressed(Button.A, function () {
    game.gameOver()
})
let character = game.createSprite(2, 2)
let run = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (run.isTouching(character)) {
        game.addScore(1)
        run.delete()
        basic.pause(100)
        run = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        character.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    } else if (input.acceleration(Dimension.X) < 0) {
        character.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        character.change(LedSpriteProperty.Y, 1)
    } else if (input.acceleration(Dimension.Y) < 0) {
        character.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
