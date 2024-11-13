export default class Cell {
    constructor(){
        this.isMine = false
        this.neighborMine = 0
        this.isRevealed = false
        this.isFlagged = false
    }
}