import React from "react";
import { HomePage, ProfilePage, DetailPage } from "../views";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default MainContent;
