import React, { useEffect, useState } from "react";
import "./board.css";

import Card from "../Card/Card.jsx";
import Dice from "../Dice/Dice.jsx";

const Board = ({ game }) => {
  const [players, setPlayers] = useState();

  useEffect(() => {
    setPlayers(game?.players);
  }, [game]);

  const places = [
    [
      { name: "Salvador", price: 400, flag: "/brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "/treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "/brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "/incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "/airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "/israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "/surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "/israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "/israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "/brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "/treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "/brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "/incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "/airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "/israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "/surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "/israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "/israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "/brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "/treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "/brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "/incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "/airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "/israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "/surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "/israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "/israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "/brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "/treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "/brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "/incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "/airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "/israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "/surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "/israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "/israel.png", type: "Place" },
    ],
  ];

  const getPlayersAtPosition = (row, index) => {
    let filteredPlayers = players
      ?.filter((player) => {
        return (
          player.position &&
          player.position[0] === row &&
          player.position[1] === index + 1
        );
      })
      .map((player, playerIndex) => {
        let translateY = 0;

        if (playerIndex > 0) {
          const increment = Math.ceil(playerIndex / 2) * 30;
          const direction = playerIndex % 2 === 1 ? -1 : 1;
          translateY = increment * direction;
        }

        return {
          ...player,
          style: {
            transform: `translateX(-50%) translateY(${translateY - 50}%)`,
          },
          translateY: translateY - 50,
        };
      });

    if (!filteredPlayers || filteredPlayers.length === 0)
      return filteredPlayers;

    const sortedPlayers = [...filteredPlayers].sort(
      (a, b) => a.translateY - b.translateY
    );

    return sortedPlayers;
  };

  // top, bottom, left, right

  return (
    <div className="game-board">
      <div className="row top">
        {places[0]?.map((place, index) => {
          return (
            <Card
              key={`top-${index}`}
              cardInfo={place}
              players={getPlayersAtPosition(0, index)}
            />
          );
        })}
      </div>
      <div className="row right">
        {places[3]?.map((place, index) => (
          <Card
            key={`right-${index}`}
            cardInfo={place}
            players={getPlayersAtPosition(1, index)}
          />
        ))}
      </div>
      <div className="row bottom">
        {places[1]?.map((place, index) => (
          <Card
            key={`bottom-${index}`}
            cardInfo={place}
            players={getPlayersAtPosition(2, index)}
          />
        ))}
      </div>
      <div className="row left">
        {places[2]?.map((place, index) => (
          <Card
            key={`left-${index}`}
            cardInfo={place}
            players={getPlayersAtPosition(3, index)}
          />
        ))}
      </div>
      <div className="corner top-left">
        {getPlayersAtPosition(0, -1)?.map((player, index) => {
          return (
            <div
              key={index}
              className="player"
              style={{
                backgroundColor: `var(--player-color-${player.color})`,
                transform: `${player.style.transform}`,
              }}
            ></div>
          );
        })}
        <p>START</p>
        <img src="/start.png" alt="" />
      </div>
      <div className="corner top-right">
        <span>0$ on hold</span>
        <p>Vacation</p>
        <img src="/vacation.png" alt="" />
      </div>
      <div className="corner bottom-left">
        <p>GO TO JAIL</p>
        <img src="/goToJail.png" alt="" />
      </div>
      <div className="corner bottom-right">
        <img src="/jail.png" alt="" />
      </div>
      <Dice />
    </div>
  );
};

export default Board;
