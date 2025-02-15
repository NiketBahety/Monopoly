import React, { act, useRef } from "react";
import "./dice.css";

const Dice = () => {
  const diceRef1 = useRef(null);
  const diceRef2 = useRef(null);

  const setAnimation = (dice, name, value) => {
    dice.current.style.animation = `${name} 2s ease-in-out forwards`;

    const children = dice.current.children;
    Array.from(children).forEach((child, index) => {
      child.classList.remove("active");
      if (index === value - 1) child.classList.add("active");
    });
  };

  function generateRandomNumber(min, max) {
    const range = max - min + 1;
    const randomArray = new Uint32Array(1);
    window.crypto.getRandomValues(randomArray);
    return min + (randomArray[0] % range);
  }

  const handleClick = () => {
    const random1 = generateRandomNumber(1, 6);
    const random2 = generateRandomNumber(1, 6);
    switch (random1) {
      case 1:
        setAnimation(diceRef1, "rollDice1", 1);
        break;
      case 2:
        setAnimation(diceRef1, "rollDice2", 2);
        break;
      case 3:
        setAnimation(diceRef1, "rollDice3", 3);
        break;
      case 4:
        setAnimation(diceRef1, "rollDice4", 4);
        break;
      case 5:
        setAnimation(diceRef1, "rollDice5", 5);
        break;
      case 6:
        setAnimation(diceRef1, "rollDice6", 6);
        break;
      default:
        break;
    }
    switch (random2) {
      case 1:
        setAnimation(diceRef2, "rollDice1", 1);
        break;
      case 2:
        setAnimation(diceRef2, "rollDice2", 2);
        break;
      case 3:
        setAnimation(diceRef2, "rollDice3", 3);
        break;
      case 4:
        setAnimation(diceRef2, "rollDice4", 4);
        break;
      case 5:
        setAnimation(diceRef2, "rollDice5", 5);
        break;
      case 6:
        setAnimation(diceRef2, "rollDice6", 6);
        break;
      default:
        break;
    }
  };

  return (
    <div className="dices" onClick={handleClick}>
      <div className="dice dice1" ref={diceRef1}>
        <div className="face side-1">
          <div className="dot dot-1"></div>
        </div>
        <div className="face side-2 active">
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
        <div className="face side-3">
          <div className="dot dot-1"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
        <div className="face side-4">
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
        <div className="face side-5">
          <div className="dot dot-1"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
        <div className="face side-6">
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
      </div>
      <div className="dice dice2" ref={diceRef2}>
        <div className="face side-1">
          <div className="dot dot-1"></div>
        </div>
        <div className="face side-2">
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>
        <div className="face side-3 active">
          <div className="dot dot-1"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
        </div>
        <div className="face side-4">
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
        <div className="face side-5">
          <div className="dot dot-1"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
        <div className="face side-6">
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <div className="dot dot-4"></div>
          <div className="dot dot-5"></div>
          <div className="dot dot-6"></div>
          <div className="dot dot-7"></div>
        </div>
      </div>
    </div>
  );
};

export default Dice;
