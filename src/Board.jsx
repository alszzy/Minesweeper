import React from "react";
import Cell from "./Cell.jsx";

function Board({ board, reveal, setFlag }) {
    return (
        <div className="board">
            {board.map((row, rowIdx) => (
                <div key={rowIdx} className="row">
                    {row.map((cell, colIdx) => (
                        <Cell 
                            key={colIdx}
                            cell={cell}
                            onReveal={() => reveal(rowIdx, colIdx)}
                            onFlag={(e) => setFlag(e, rowIdx, colIdx)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;
