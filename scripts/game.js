Game = (_ => {
    let table = []
    let snakePos = [{x: 4, y: 3}, {x: 3, y: 3}]
    let dir = {x: 1, y: 0}

    return {
        init: (size = 10) => {
            console.log("GAME INIT");
            table = new Array(size).fill(0).map((a,b) => new Array(size).fill(0))
        },

        changeDirection: change => {
            if (dir.x === 1) {
                dir.x = 0
                dir.y = 1
            } else if (dir.x === -1) {
                dir.x = 0
                dir.y = -1
            } else if (dir.y === 1) {
                dir.x = -1
                dir.y = 0
            } else if (dir.y === -1) {
                dir.x = 1
                dir.y = 0
            }

            console.log("changeDirection: ", dir)
        },

        getNext: _ => {
            console.log(dir)
            snakePos.unshift({x: snakePos[0].x + dir.x, y: snakePos[0].y + dir.y})
            snakePos.pop()
        },

        getTable: _ => table,

        getSnake: _ => snakePos
    }
})();