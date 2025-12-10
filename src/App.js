import React, { useState } from "react";
import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";

function App() {
  const [screen, setScreen] = useState("home");

  return (
    <>
      {screen === "home" && <HomeScreen onGoToMap={() => setScreen("map")} />}
      {screen === "map" && <MapScreen onBack={() => setScreen("home")} />}
    </>
  );
}

export default App;
