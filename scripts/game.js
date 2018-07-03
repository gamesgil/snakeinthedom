Game = (_ => {
    console.log("GAME");
    
    let table = [];
    let snakePos = [{x: 3, y: 3}];
    


    return {
        init: (size = 10) => {
            console.log("GAME INIT");
            table = new Array(size).fill(0).map((a,b) => new Array(size).fill(0))
        },

        getTable: _ => table,

        getSnake: _ => snakePos
    }
})();