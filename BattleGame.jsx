import { useState } from 'react'

import "./BattleGame.css"   //css files are not imported as react components; use this format

import HealthBar from "./HealthBar.jsx"
import StatusMessage from './StatusMessage.jsx'
import Controls from './Controls.jsx'

function BattleGame ({ minDamage = 5, maxDamage = 20}) {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [gameStatus, setGameStatus] = useState("active");

    const handleFire = () => {
        const playerDamage =
        Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage 
        const enemyDamage =
        Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage

        const newPlayerHealth = Math.max(0, playerHealth - playerDamage);
        const newEnemyHealth = Math.max(0, enemyHealth - enemyDamage);

        let nextStatus = "active";

        if (newPlayerHealth === 0 && newEnemyHealth === 0) {
            nextStatus = "draw"
        }
        else if (newEnemyHealth === 0) {
            nextStatus = "win"
        }
        else if (newPlayerHealth === 0) {
            nextStatus = "loss"
        }

        setPlayerHealth(newPlayerHealth);
        setEnemyHealth(newEnemyHealth);
        setGameStatus(nextStatus);
       

    };

    const handleRestart = () => {
        setPlayerHealth(100);
        setEnemyHealth(100);
        setGameStatus("active");
    };

    console.log ({ playerHealth, enemyHealth, gameStatus }); //debug line

    return (
        <div className="battle-game">
            <h2>Battle Game</h2>

            <HealthBar
            playerHealth = {playerHealth}
            enemyHealth = {enemyHealth}
            />

            <StatusMessage gameStatus = {gameStatus} />

            <Controls 
            gameStatus = {gameStatus}
            onFire = {handleFire}
            onRestart = {handleRestart}
            />
        </div>
    );
}

export default BattleGame;