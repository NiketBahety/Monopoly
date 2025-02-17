import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Room from "../Room/Room.jsx";
import Home from "../Home/Home.jsx";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/room/:roomId" exact element={<Room />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
