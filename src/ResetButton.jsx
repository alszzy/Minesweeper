function ResetButton({isWin, isGameOver, resetGame}) {
    return (
        <div className={`reset-button ${isGameOver ? "lost" : ""}`} onClick={resetGame}
        >
            {!isWin && !isGameOver && <h1>🙂</h1>}
            {isGameOver && <h1>🙂</h1>}
        </div>
    )
}
export default ResetButton