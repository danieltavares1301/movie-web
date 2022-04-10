import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Sessions from "./pages/Session";
import Users from "./pages/User";
import Tickets from "./pages/Ticket";
import Layout from "./components/Layout";
import Homes from "./pages/Home";
import User from "./pages/User/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Homes />} index />
          <Route path="/User" element={<Outlet />}>
            <Route element={<Users />} index />
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="/Session" element={<Sessions />} />
          <Route path="/Ticket" element={<Tickets />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
