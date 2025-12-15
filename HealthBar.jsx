import "./HealthBar.css"

function HealthBar ({ playerHealth, enemyHealth }) {

    return (
        <div className = "healthbar">
            
            <div className = "player-health">
                <h3>Player</h3>
                <p>{playerHealth}</p>
            </div>

            <div className = "enemy-health">
                <h3>Enemy</h3>
                <p>{enemyHealth}</p>
            </div>
           
        </div>
    );
}

export default HealthBar;