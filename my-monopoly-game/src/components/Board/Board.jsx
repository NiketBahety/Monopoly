import React, { useEffect } from "react";
import "./board.css";

import Card from "../Card/Card.jsx";
import Dice from "../Dice/Dice.jsx";

const Board = () => {
  const places = [
    [
      { name: "Salvador", price: 400, flag: "./brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "./treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "./brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "./incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "./airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "./israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "./surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "./israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "./israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "./brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "./treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "./brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "./incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "./airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "./israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "./surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "./israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "./israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "./brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "./treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "./brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "./incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "./airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "./israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "./surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "./israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "./israel.png", type: "Place" },
    ],
    [
      { name: "Salvador", price: 400, flag: "./brazil.png", type: "Place" },
      { name: "Treasure", price: 350, flag: "./treasure.jpg", type: "Extra" },
      { name: "Rio", price: 320, flag: "./brazil.png", type: "Place" },
      {
        name: "Income Tax",
        price: 300,
        flag: "./incomeTax.jpeg",
        type: "Extra",
      },
      {
        name: "TLV Airport",
        price: 280,
        flag: "./airport.jpg",
        type: "Airport",
      },
      { name: "Tel Aviv", price: 260, flag: "./israel.png", type: "Place" },
      { name: "Surprise", price: 240, flag: "./surprise.jpeg", type: "Extra" },
      { name: "Haifa", price: 220, flag: "./israel.png", type: "Place" },
      { name: "Jerusalem", price: 200, flag: "./israel.png", type: "Place" },
    ],
  ];

  // top, bottom, left, right

  return (
    <div className="game-board">
      <div className="row top">
        {places[0]?.map((place, index) => (
          <Card key={`top-${index}`} cardInfo={place} />
        ))}
      </div>
      <div className="row bottom">
        {places[1]?.map((place, index) => (
          <Card key={`bottom-${index}`} cardInfo={place} />
        ))}
      </div>
      <div className="row left">
        {places[2]?.map((place, index) => (
          <Card key={`left-${index}`} cardInfo={place} />
        ))}
      </div>
      <div className="row right">
        {places[3]?.map((place, index) => (
          <Card key={`right-${index}`} cardInfo={place} />
        ))}
      </div>
      <div className="corner top-left"></div>
      <div className="corner top-right"></div>
      <div className="corner bottom-left"></div>
      <div className="corner bottom-right"></div>
      <Dice />
    </div>
  );
};

export default Board;
