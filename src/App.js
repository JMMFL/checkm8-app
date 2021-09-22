import React from "react";
import { Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/" element={<ProfilePage />} />
      {/* <Route path="*" element={<WhoopsPage />} /> */}
    </Routes>
  )
}

export default App;