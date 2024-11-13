import React from 'react'
import { useNavigate } from 'react-router-dom';
const Rules = () => {
    const navigate = useNavigate();

    return (
        <div className="rules-container">
            <button className="back-button" onClick={() => navigate("/")}>
                ⬅️ Back to Home
            </button>
            <h1>Minesweeper Rules</h1>
            <section>
                <h2>Objective</h2>
                <p>The goal is to clear the board without clicking on any mines. Use the numbers on revealed tiles to figure out the locations of the mines.</p>
            </section>
            <section>
                <h2>Game Setup</h2>
                <p>The board contains hidden mines. Numbers on tiles indicate how many mines are adjacent to that tile (horizontally, vertically, or diagonally).</p>
            </section>
            <section>
                <h2>Gameplay</h2>
                <ul>
                    <li>
                        <strong>Left Click:</strong> Reveal a tile. If it's a mine, the game ends. If it's a number, it shows the count of adjacent mines. If it's blank, neighboring tiles are automatically revealed.
                    </li>
                    <li>
                        <strong>Right Click:</strong> Place a flag on a suspected mine.
                    </li>
                </ul>
            </section>
            <section>
                <h2>Win and Lose Conditions</h2>
                <ul>
                    <li><strong>Win:</strong> Flag all the mines and reveal all non-mine tiles.</li>
                    <li><strong>Lose:</strong> Clicking on a mine ends the game immediately.</li>
                </ul>
            </section>
            <section>
                <h2>Difficulty Levels</h2>
                <ul>
                    <li><strong>Easy:</strong> Board size: 8x8, Mines: 10.</li>
                    <li><strong>Medium:</strong> Board size: 16x16, Mines: 40.</li>
                    <li><strong>Hard:</strong> Board size: 30x30, Mines: 99.</li>
                </ul>
            </section>
            <section>
                <h2>Tips</h2>
                <ul>
                    <li>Start by clicking tiles in a corner to reveal a safe area.</li>
                    <li>Use the numbers to deduce where mines are located.</li>
                    <li>Flag tiles you are certain contain mines.</li>
                    <li>Be cautious near clusters of numbers, as they often indicate nearby mines.</li>
                </ul>
            </section>
        </div>
    );
}

export default Rules