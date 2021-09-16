import React from "react";
import HomePage from "./pages/HomePage";
import LadderPage from "./pages/LadderPage";
import ProfilePage from "./pages/ProfilePage";
import StreamersPage from "./pages/StreamersPage";

function App() {
  return (
    <>
      <HomePage />
      <ProfilePage username="hikaru" />
      <LadderPage />
      <StreamersPage />
    </>
  )
}

export default App;