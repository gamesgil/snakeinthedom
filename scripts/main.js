const onKey = e => {
    console.log(e)
    switch (e.key) {
        case "ArrowLeft":
            Game.changeDirection(-1)
            break;

        case "ArrowRight":
            Game.changeDirection(1)
            break
    }

    View.clear()
    Game.getNext()
    
Game.getSnake().map(pos =>View.draw(pos, "snake"))
    console.log(Game.getSnake())
}

Game.init()
console.log("main: ", Game.getSnake())
View.init(10)

Game.getSnake().map(pos =>View.draw(pos, "snake"))

window.addEventListener('keydown', onKey)

