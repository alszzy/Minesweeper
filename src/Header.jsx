import React from 'react'
import {useNavigate} from "react-router-dom"
const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <h1>Select difficulty</h1>
            <button onClick={()=>navigate("/game/easy")}>EASY</button>
            <button onClick={()=>navigate("/game/medium")}>MEDIUM</button>
            <button onClick={()=>navigate("/game/hard")}>HARD</button>
            <button onClick={()=>navigate("/rules")}>Rules</button>
        </div>
  )
}

export default Header