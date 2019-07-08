import Utils from './utils'


const Game = (_ => {
    let grid = []
    let foodIdx = -1
    let snakePos = [{x: 5, y: 3}, {x: 4, y: 3}, {x: 3, y: 3}, {x: 2, y: 3}, {x: 2, y: 2}]
    let dir = {x: 1, y: 0}
    let isPlaying = false

    return {
        init: (size = 10) => {
            grid = Array(size).fill(0).map((a,b) => new Array(size).fill(0))
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
        },

        move: _ => {
            snakePos.unshift({x: snakePos[0].x + dir.x, y: snakePos[0].y + dir.y})
            snakePos.pop()
        },

        isEating: _ => {
            const result = foodIdx === Utils.posToIdx(snakePos[0], grid.length)

            return result
        },

        addOne: _ => {
            snakePos.push(snakePos[snakePos.length - 1])
        },

        addFood: _ => {
            const potentials = Array(grid.length * grid.length).fill().map((a, b) => b)

            snakePos.map(pos => {
                const idx = Utils.posToIdx(pos, grid.length)
                potentials.splice(potentials.indexOf(idx), 1)
            })

            const rand = Math.floor(Math.random() * potentials.length)
            
            foodIdx = potentials[rand]
        },

        removeFood: _ => {
            foodIdx = -1
        },

        isHit: _ => {
            const snakeHead = snakePos[0]

            const overlaps = snakePos
                .slice(1)
                .filter(pos => snakeHead.x === pos.x && snakeHead.y === pos.y)

            const result = overlaps.length > 0

            return result
        },

        stop: _ => {
            status = 0
        },

        getGrid: _ => grid,

        getSnake: _ => snakePos,

        getFoodIdx: _ => foodIdx,

        getStatus: _ => status
    }
})();

export default Game