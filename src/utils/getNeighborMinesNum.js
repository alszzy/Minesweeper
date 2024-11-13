export default function getNeighborMinesNum(board, rows, cols){
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j].isMine)
                continue
            board[i][j].neighborMine = countNeighborMine(board, i, j)
        }
    }
}

function countNeighborMine(board, row, col){
    let numMine = 0
    for (let i = row-1; i <= row+1; i++) {
        for (let j = col-1; j <= col+1; j++) {
            if (board[i]?.[j]?.isMine)
                numMine++
        }
    }
    return numMine
}