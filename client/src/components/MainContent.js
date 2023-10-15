import React from "react";
import {
  HomePage,
  ProfilePage,
  DetailPage,
  BookingPage,
  LoginPage,
  RegisterPage,
} from "../views";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/ticket" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default MainContent;
