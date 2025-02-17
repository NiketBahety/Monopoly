import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { FaKey } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/create-room");
      navigate(`/room/${res.data.roomCode}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      <button className="btn" onClick={handleClick}>
        <FaKey />
        <span>Create a private room</span>
      </button>
    </div>
  );
};

export default Home;
