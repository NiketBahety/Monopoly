import React, { useEffect, useState } from "react";
import "./game.css";

import Board from "../Board/Board.jsx";
import CopyLink from "../CopyLink/CopyLink.jsx";

const Game = ({ socket, roomId, name }) => {
  const [chosenColor, setChosenColor] = useState();
  const [first1, setFirst1] = useState(true);
  const [game, setGame] = useState();

  useEffect(() => {
    if (localStorage.getItem(`${roomId}Color`)) {
      setFirst1(false);
      // socket.emit("joinGame", { roomCode: roomId, name, chosenColor });
    }
    socket.emit("getGame", roomId);
    socket.on("receiveGame", (game) => {
      console.log(game);
      setGame(game);
      if (game && game.players) {
        const players = game.players;
        for (let i = 0; i < players.length; i++) {
          let color = players[i].color;
          document.getElementById(`color-${color}`)?.classList.add("disabled");
        }
      }
    });
    socket.on("NewPlayer", (name) => {
      console.log("new player: ", name);
    });

    const colors = document.querySelectorAll(".color");

    colors.forEach((color) => {
      color.addEventListener("click", () => {
        colors.forEach((c) => c.classList.remove("active"));
        color.classList.add("active");
        setChosenColor(color.getAttribute("value"));
      });
    });
  }, []);

  const handleClick = () => {
    if (!chosenColor) {
      alert("Please choose a color!");
      return;
    }
    localStorage.setItem(`${roomId}Color`, chosenColor);
    setFirst1(false);
    socket.emit("joinGame", { roomCode: roomId, name, chosenColor });
  };

  return (
    <div className="game">
      <CopyLink />
      <Board game={game}></Board>;
      <div className="players-container">
        {game?.players?.map((player, index) => (
          <div
            key={player.id || index}
            className="player-name"
            style={{
              ...(game.activePlayer != null &&
                game.activePlayer === player.id && {
                  borderLeft: `5px solid var(--player-color-${player.color})`,
                }),
            }}
          >
            <div
              className="player-icon"
              style={{
                backgroundColor: `var(--player-color-${player.color})`,
              }}
            ></div>
            <p>{player.name}</p>
          </div>
        ))}
      </div>
      {first1 ? (
        <div className="overlay">
          <p className="heading">Select your player appearance:</p>
          <div className="color-pallette">
            <div className="color" value="1" id="color-1"></div>
            <div className="color" value="2" id="color-2"></div>
            <div className="color" value="3" id="color-3"></div>
            <div className="color" value="4" id="color-4"></div>
            <div className="color" value="5" id="color-5"></div>
            <div className="color" value="6" id="color-6"></div>
            <div className="color" value="7" id="color-7"></div>
            <div className="color" value="8" id="color-8"></div>
            <div className="color" value="9" id="color-9"></div>
            <div className="color" value="10" id="color-10"></div>
            <div className="color" value="11" id="color-11"></div>
            <div className="color" value="12" id="color-12"></div>
          </div>
          <button className="btn" onClick={handleClick}>
            Join Game
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Game;
