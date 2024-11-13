function Message({isWin, isGameOver}) {
    return (
        <div className='message'>
            {isWin && <h1>🎉 You Win! 🎉</h1>}
            {isGameOver && !isWin && <h1>💣 Game Over! 💣</h1>}
        </div>
    )
}

export default Message