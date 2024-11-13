import React from "react";

function Cell({cell, onReveal, onFlag}) {
    return (
        <div
            className={`
                cell 
                ${cell.isRevealed ? "cell--revealed" : ""} 
                ${cell.isRevealed && cell.isMine ? "cell--mine" : ""}
            `}
            data-value={cell.neighborMine}
            onClick={onReveal}
            onContextMenu={onFlag}
        >
            {cell.isFlagged ? "⛳️" : ""}
            {cell.isRevealed && cell.isMine ? "💣" : ""}
            {cell.isRevealed && cell.neighborMine > 0 ? cell.neighborMine : ""}
        </div>
    );
}

export default Cell