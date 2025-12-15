import "./StatusMessage.css"

function StatusMessage ({ gameStatus }) {
  let message = "";

  if (gameStatus === "win") {
    message = "Player Wins!";
  }
    
    else if (gameStatus === "loss") {
      message = "Enemy Wins!"
    }

    else if (gameStatus === "draw") {
      message = "It's a draw!";
    }

    else {
      message = "Battle in progress..."
    }
  

    return (

    <div className = {`status-message ${gameStatus}`}>
      <p>{message}</p>
    </div>

  );
}

export default StatusMessage; 