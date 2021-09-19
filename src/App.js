import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LadderPage from "./pages/LadderPage";
import ProfilePage from "./pages/ProfilePage";
import StreamersPage from "./pages/StreamersPage";
import WhoopsPage from "./pages/WhoopsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="leaderboards" element={<LadderPage />} />
      <Route path="streamers" element={<StreamersPage />} />
      <Route path="profile/:username" element={<ProfilePage />} />
      <Route path="*" element={<WhoopsPage />} />
    </Routes>
  )
}

export default App;