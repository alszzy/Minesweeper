export default function randomizeMine(board, rows, cols, mineNum){
    let mineList = new Set()

    while (mineList.size < mineNum){
        const minePosition = Math.floor(Math.random() * rows * cols)
        mineList.add(minePosition) 
    }

    Array.from(mineList).forEach( minePosition => {
        const row = Math.floor(minePosition / rows)
        const col = Math.floor(minePosition % cols)
        board[row][col].isMine = true
    });
}