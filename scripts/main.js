const move = _ => {
    View.clear()
    Game.move()


    if (Game.isEating()) {
        console.log("EAT");

        Game.removeFood()
        Game.addOne()
        Game.addFood()
    }

    if (!Game.getSnake().filter(pos => 
        pos.x < 0 || pos.x >= Game.getGrid().length ||
        pos.y < 0 || pos.y >= Game.getGrid().length).length) {
            Game.getSnake().map(pos => View.draw(pos, "snake"))

            if (Game.getFoodIdx() >= 0) {
                View.draw(Game.getFoodIdx(), "food")
            }
        
        
            console.log("move", Game.getSnake())
        } else {
            stop()
        }
    
}

const stop = _ => {
    Game.stop()
    clearInterval(gameLoop)

    console.log("STOP");
    
}

const onKey = e => {
    console.log(e)
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
console.log("main: ", Game.getSnake())
View.init(10)

Game.getSnake().map(pos =>View.draw(pos, "snake"))

window.addEventListener('keydown', onKey)

Game.addFood()

View.draw(Game.getFoodIdx(), "food")

const gameLoop = setInterval(_ => move(), 1000)


