import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./room.css";
import axios from "axios";
import Game from "../Game/Game.jsx";
import io from "socket.io-client";

const Room = () => {
  const { roomId } = useParams();
  const [valid, setValid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [alreadyJoined, setAlreadyJoined] = useState(null);
  const [socket, setSocket] = useState(null);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (!roomId) return;

    const fetchRoomData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/check-room/${roomId}`
        );
        setValid(res.data.valid);

        if (res.data.valid) {
          if (localStorage.getItem(`${roomId}`)) {
            const socketInstance = io("http://localhost:3000", {
              auth: { id: localStorage.getItem(`${roomId}`), roomId: roomId },
            });
            setSocket(socketInstance);

            setAlreadyJoined(true);
            setFirst(false);
            // socket.emit("joinRoom", { roomCode: roomId, name });
          } else {
            const socketInstance = io("http://localhost:3000");
            setSocket(socketInstance);

            setAlreadyJoined(false);
          }
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
        setValid(false);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomData();
  }, []);

  const handleClick = () => {
    if (name.trim().length === 0) console.log("Name cannot be empty");
    localStorage.setItem(`${roomId}`, socket.id);
    localStorage.setItem(`${roomId}Name`, name);
    socket.emit("joinRoom", { roomCode: roomId, name });
    setAlreadyJoined(true);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  } else if (alreadyJoined) {
    return <Game socket={socket} roomId={roomId} first={first} name={name} />;
  }

  return (
    <div className="room">
      {valid ? (
        <div className="container">
          <input
            type="text"
            className="name-input"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn" onClick={handleClick}>
            <span>Join Room</span>
          </button>
        </div>
      ) : (
        <div className="error">This room does not exist</div>
      )}
    </div>
  );
};

export default Room;
