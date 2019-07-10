import Utils from './utils'


const View = (_ => {
    let size = 0

    return {
        init: boardSize => {
            size = boardSize
            const table = document.querySelector("tbody")
            
            for (let y = 0; y < size; y++) {
                const row = table.insertRow()

                for (let x = 0; x < size; x++) {
                    const col = row.insertCell()
                }
            }
        },

        draw: (pos, type) => {
            pos = typeof pos === 'number' ? pos : Utils.posToIdx(pos, size)
            const cell = document.querySelectorAll("td")[pos]

            cell.classList.add(type)
        }, 
        
        clear: _ => {
            const cells = document.querySelectorAll("td")

            for (let i = 0; i < cells.length; i++) {
                cells[i].classList.remove("snake")
                cells[i].classList.remove("snake-head")
                cells[i].classList.remove("food")
            }
            
        },

        showGameOver: _ => {
            const panel = document.querySelectorAll(".panel")[0]

            panel.classList.remove('hidden')

            panel.addEventListener('click', _ => window.location.reload())

        }
    }
})()

export default View