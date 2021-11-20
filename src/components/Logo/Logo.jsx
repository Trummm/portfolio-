import React from "react";
import "./logo.css";

function Logo(props) {
  console.log(props.theme);
  return (
    <div className="logo">
      <h1 style={{ color: `${props.color}` }}>
        <span
          style={{ color: `${props.theme}`, backgroundColor: "transparent" }}
        >
          Tr
        </span>
        um
      </h1>
    </div>
  );
}

export default Logo;
