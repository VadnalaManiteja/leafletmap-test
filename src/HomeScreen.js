import React from "react";

function HomeScreen({ onGoToMap }) {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Welcome!</h2>
      <button
        onClick={onGoToMap}
        style={{
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer",
          marginTop: 20
        }}
      >
        Go to Map
      </button>
    </div>
  );
}

export default HomeScreen;
