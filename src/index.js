import Game from './scripts/game'
import View from './scripts/view'

import './style.scss'

console.log('dude')

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
        if (!Game.getSnake().filter((pos, idx) => 
            pos.x < 0 || pos.x >= Game.getGrid().length ||
            pos.y < 0 || pos.y >= Game.getGrid().length).length) {
                Game.getSnake().map((pos, idx) => View.draw(pos, idx ? "snake" : "snake-head"))
    
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

const size = 20

Game.init(size)
View.init(size)

Game.getSnake().map((pos, idx) => {
    if (idx) {
        View.draw(pos, "snake")
    } else {
        View.draw(pos, "snake-head")
    }
})

window.addEventListener('keydown', onKey)

Game.addFood()

View.draw(Game.getFoodIdx(), "food")

gameLoop()

console.log(Game.getStatus())
function gameLoop() {
    if (Game.getStatus()) {
        move()

        setTimeout(_ => gameLoop(), 3000 / Game.getSnake().length)
    } else {
        View.showGameOver()
    }
}

