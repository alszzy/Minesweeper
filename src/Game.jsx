import { useEffect, useState, useCallback  } from 'react'
import './App.css'
import Cell from './Cell.js'
import BackButton from './BackButton.jsx';
import Message from './Message.jsx';
import ResetButton from './ResetButton.jsx';
import Board from './Board.jsx';
import randomizeMine from './utils/randomizeMine.js';
import getNeighborMinesNum from './utils/getNeighborMinesNum.js';

function Game({rows, cols, mines}) {


    const init = useCallback(() => {
        let board = new Array(rows).fill(null).map(() => new Array(cols).fill(null).map(() => new Cell()))
        randomizeMine(board, cols, rows, mines)
        getNeighborMinesNum(board, rows, cols)
        return board
    }, [rows, cols, mines])

    const [board, setBoard] = useState(init)
    const [isGameOver, setIsGameOver] = useState(false)
    const [isWin, setIsWin] = useState(false)

    const reveal = (row, col) => {

        if (board[row][col].isRevealed || board[row][col].isFlagged || isGameOver)
            return 

        const updatedBoard = [...board]

        if (board[row][col].isMine){
            updatedBoard[row][col].isRevealed = true

            updatedBoard.forEach((row)=>row.forEach((cell)=>{
                if(cell.isMine)
                    cell.isRevealed = true
            }))
            setBoard(updatedBoard)
            setIsGameOver(true)
            return
        }
 
    
        const stack = [[row, col]]
    
        while (stack.length > 0){
    
            const [row, col] = stack.shift()
            const currentCell = updatedBoard[row][col]

            currentCell.isRevealed = true;
            if (currentCell.neighborMine > 0) continue

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i !== 0 || j !== 0) {
                        const newRow = row + i;
                        const newCol = col + j;
        
                        if (
                            (i !== 0 || j !== 0) &&  // Skip the current cell itself
                            newRow >= 0 && newRow < updatedBoard.length &&
                            newCol >= 0 && newCol < updatedBoard[0].length
                        ) {
                            const neighborCell = updatedBoard[newRow][newCol];
        
                            if (!neighborCell.isRevealed && !neighborCell.isFlagged && !neighborCell.isMine) {
                                stack.push([newRow, newCol]);
                            }
                        }
                    }
                }
            }
        }
        setBoard(updatedBoard)
    }
    const setFlag = (e, row, col) => {
        e.preventDefault()
        if (board[row][col].isRevealed)return
        const updatedBoard = [...board]
        updatedBoard[row][col].isFlagged = !updatedBoard[row][col].isFlagged
        setBoard(updatedBoard)
    }
    const resetGame = () => {
        setBoard(init); 
        setIsWin(false);
        setIsGameOver(false);
        localStorage.removeItem('minesweeperGameState');
    };

    useEffect(() => {
        const revealed = board.reduce((acc_row, row) => {
            acc_row += row.reduce((acc_cell, col) => {
                acc_cell += col.isRevealed ? 1 : 0
                return acc_cell
            }, 0)
            return acc_row
        }, 0)

        if (revealed === cols * rows - mines) {
            setIsWin(true)
            setIsGameOver(true)
        }
    }, [board, cols, rows, mines])

    useEffect(() => {
        document.documentElement.style.setProperty('--row', rows);
        document.documentElement.style.setProperty('--col', cols);
        
        // Cleanup when component unmounts
        return () => {
            document.documentElement.style.removeProperty('--row');
            document.documentElement.style.removeProperty('--col');
        };
    }, [rows, cols]);


    const saveGameState = () => {
        const serializedBoard = board.map(row =>
            row.map(cell => ({
                isMine: cell.isMine,
                isRevealed: cell.isRevealed,
                isFlagged: cell.isFlagged,
                neighborMine: cell.neighborMine,
            }))
        );
    
        const gameState = {
            board: serializedBoard,
            isGameOver,
            isWin,
        };
    
        localStorage.setItem('minesweeperGameState', JSON.stringify(gameState));
    };

    const loadGameState = () => {
        const savedGameState = localStorage.getItem('minesweeperGameState');
        if (savedGameState) {
            const { board: serializedBoard, isGameOver, isWin } = JSON.parse(savedGameState);
    
            const deserializedBoard = serializedBoard.map(row =>
                row.map(cellData => {
                    const cell = new Cell();
                    cell.isMine = cellData.isMine;
                    cell.isRevealed = cellData.isRevealed;
                    cell.isFlagged = cellData.isFlagged;
                    cell.neighborMine = cellData.neighborMine;
                    return cell;
                })
            );
    
            setBoard(deserializedBoard);
            setIsGameOver(isGameOver);
            setIsWin(isWin);
        }
    };
    
    // Save game state to localStorage whenever it changes
    useEffect(() => {
        saveGameState();
    }, [board, isGameOver, isWin]);
    

    // Load game state from localStorage on component mount
    useEffect(() => {
        loadGameState();
    }, []);

    return (
        <>        
            <BackButton />   
            <Message isWin={isWin} isGameOver={isGameOver}/> 
            <ResetButton isWin={isWin} isGameOver={isGameOver} resetGame={resetGame} />
            <Board board={board} reveal={reveal} setFlag={setFlag}/>
        </>
    );    
}
export default Game
