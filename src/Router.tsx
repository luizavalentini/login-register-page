import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import GlobalStyle from "./Global.styled";
import { Login } from "./pages/Login";
import { LogOut } from "./pages/LogOut";
import { SignUp } from "./pages/SignUp";

export const Router = () => {
  return (
    <BrowserRouter>
    <GlobalStyle />
      <UserProvider>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogOut" element={<LogOut />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
