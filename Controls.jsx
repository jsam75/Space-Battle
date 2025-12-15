import "./Controls.css"

function Controls ({ gameStatus, onFire, onRestart }) {
    const isGameOver =
    gameStatus === "win" ||
    gameStatus === "loss" ||
    gameStatus === "draw";

return (
    <div className = "controls">
    {!isGameOver && (
        <button onClick = {onFire}>Fire</button>
    )}

    {isGameOver && (
        <button onClick = {onRestart}>Restart</button>
    )}
    </div>
);
}

export default Controls;  