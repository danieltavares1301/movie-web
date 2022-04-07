import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Session from "./pages/Session";
import User from "./pages/User";
import Ticket from "./pages/Ticket";
import Layout from "./components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/User" element={<User />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
      </Layout>
    </BrowserRouter>

  );
};

export default Router;
