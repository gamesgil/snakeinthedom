const move = _ => {
    View.clear()
    Game.move()

    if (Game.isHit()) {
        stop()
    } else if (Game.isEating()) {
        Game.removeFood()
        Game.addOne()
        Game.addFood()

        View.draw(Game.getFoodIdx(), "food")
        Game.getSnake().map(pos =>View.draw(pos, "snake"))

    } else {
        if (!Game.getSnake().filter(pos => 
            pos.x < 0 || pos.x >= Game.getGrid().length ||
            pos.y < 0 || pos.y >= Game.getGrid().length).length) {
                Game.getSnake().map(pos => View.draw(pos, "snake"))
    
            if (Game.getFoodIdx() >= 0) {
                View.draw(Game.getFoodIdx(), "food")
            }
        } else {
            stop()
        }
    }

    
    
}

const stop = _ => {
    Game.stop()
    clearInterval(gameLoop)
}

const onKey = e => {
    switch (e.key) {
        case "ArrowLeft":
            Game.changeDirection(-1)
            break;

        case "ArrowRight":
            Game.changeDirection(1)
            break

        case "Escape":
            stop()
            break;
    }
}

Game.init()
View.init(10)

Game.getSnake().map(pos =>View.draw(pos, "snake"))

window.addEventListener('keydown', onKey)

Game.addFood()

View.draw(Game.getFoodIdx(), "food")

const gameLoop = setInterval(_ => move(), 1000)


