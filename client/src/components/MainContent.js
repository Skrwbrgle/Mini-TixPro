import React from "react";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import { Routes, Route } from "react-router-dom";

const MainContent = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage></HomePage>} />
        <Route path="/profile" element={<ProfilePage></ProfilePage>} />
      </Routes>
    </>
  );
};

export default MainContent;
