import React, { useEffect, useRef } from "react";
import "./card.css";

const Card = ({ cardInfo, players }) => {
  const cardBgRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    if (cardBgRef.current && circleRef.current) {
      circleRef.current.style.setProperty(
        "--width",
        `${cardBgRef.current.offsetWidth}px`
      );
    }
  }, [cardInfo]);

  switch (cardInfo.type) {
    case "Place":
      return (
        <div
          ref={cardBgRef}
          className="card-bg"
          style={{
            background: `url("${cardInfo.flag}")`,
          }}
        >
          <div className="card">
            <div className="half price">
              <p>{cardInfo.price} $</p>
            </div>
            <div className="half name">
              {cardInfo.name}
              <div
                ref={circleRef}
                className="circle"
                style={{
                  backgroundImage: `url("${cardInfo.flag}")`,
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    case "Airport":
      return (
        <div
          className="card-bg"
          style={{
            background: `url("${cardInfo.flag}")`,
          }}
          ref={cardBgRef}
        >
          <div className="card airport">
            <div className="half">
              <p>{cardInfo.price} $</p>
            </div>
            <div className="half name">
              <span> {cardInfo.name}</span>
              <img src={cardInfo.flag} ref={circleRef} />
            </div>
          </div>
        </div>
      );
    case "Extra":
      return (
        <div className="extra-card treasure" ref={cardBgRef}>
          <p>{cardInfo.name}</p>
          <img src={cardInfo.flag} ref={circleRef} />
        </div>
      );
    default:
      return <></>;
  }
};

export default Card;
