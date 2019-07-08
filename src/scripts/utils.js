const Utils = (_ => {
    return {
        posToIdx: (pos, size) => pos.y * size + pos.x,
        idxToPos: (idx, size) => idx * size + idx % size
    }
})()

export default Utils;