import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from "./pages/Session";
import User from "./pages/User";
import Ticket from "./pages/Ticket";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/Session" element={<Session />} />
          <Route path="/User" element={<User />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
