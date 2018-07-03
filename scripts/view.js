console.log("VIEW");
View = (_ => {
    let frames = 0

    return {
        init: size => {
            const table = document.querySelector("tbody")
            
            for (let y = 0; y < size; y++) {
                const row = table.insertRow()

                for (let x = 0; x < size; x++) {
                    const col = row.insertCell()
                }
            }
        },

        draw: (pos, type) => {
            const cell = document.querySelectorAll("td")[pos]

            cell.classList.add(type)
        }
    }
})()