import React from "react";
import "./logo.css";

function Logo({color, theme}) {
  return (
    <div className="logo">
      <h1 style={{ color: `${color}` }}>
        <span
          style={{ color: `${theme}`, backgroundColor: "transparent" }}
        >
          Tr
        </span>
        um
      </h1>
    </div>
  );
}

export default Logo;
