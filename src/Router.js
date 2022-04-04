import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Session from "./pages/Session";
import User from "./pages/User";
import Ticket from "./pages/Ticket";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/User" element={<User />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
