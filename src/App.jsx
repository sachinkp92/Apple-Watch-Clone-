// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import WatchCustomize from "./components/WatchCustomize/WatchCustomize";
import WatchSize from "./components/WatchSize/WatchSize";
import WatchCase from "./components/WatchCase/WatchCase";
import WatchBand from "./components/WatchBand/WatchBand";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<WatchCustomize />} />
          <Route path="/watch-sizes" element={<WatchSize />} />
          <Route path="/watch-cases" element={<WatchCase />} />
          <Route path="/watch-bands" element={<WatchBand />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
