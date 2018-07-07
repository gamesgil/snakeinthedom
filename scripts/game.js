Game = (_ => {
    let table = []
    let foodIdx = -1
    let snakePos = [{x: 4, y: 3}, {x: 3, y: 3}, {x: 2, y: 3}, {x: 2, y: 2}]
    let dir = {x: 1, y: 0}

    return {
        init: (size = 10) => {
            console.log("GAME INIT");
            table = Array(size).fill(0).map((a,b) => new Array(size).fill(0))
        },

        changeDirection: change => {
            if (dir.x === 1) {
                dir.x = 0
                dir.y = change
            } else if (dir.x === -1) {
                dir.x = 0
                dir.y = -change
            } else if (dir.y === 1) {
                dir.x = -change
                dir.y = 0
            } else if (dir.y === -1) {
                dir.x = change
                dir.y = 0
            }

            console.log("changeDirection: ", dir)
        },

        getNext: _ => {
            
            snakePos.unshift({x: snakePos[0].x + dir.x, y: snakePos[0].y + dir.y})
            snakePos.pop()
        },

        addFood: _ => {
            const potentials = Array(table.length * table.length).fill().map((a, b) => b)
            console.log(potentials)

            snakePos.map(pos => {
                const idx = Utils.posToIdx(pos, table.length)
                console.log(idx)
                potentials.splice(potentials.indexOf(idx), 1)
            })

            const rand = Math.floor(Math.random() * potentials.length)
            console.log("rand: ", rand);
            
            foodIdx = potentials[rand]

            console.log("foodIdx: ", foodIdx)
        },

        getTable: _ => table,

        getSnake: _ => snakePos,

        getFoodIdx: _ => foodIdx
    }
})();