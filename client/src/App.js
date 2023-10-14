import "./App.css";
import React from "react";
import { MainContent, NavigateBar, Footer } from "./components";

function App() {
  return (
    <>
      <NavigateBar></NavigateBar>
      <MainContent></MainContent>
      <Footer></Footer>
    </>
  );
}

export default App;
