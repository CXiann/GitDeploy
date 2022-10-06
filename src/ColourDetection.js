import React from "react";
import { useState } from "react";

const ColourDetection = () => {
  const [colour, setColour] = useState("");
  return (
    <div className="outerForm">
      <form className="colourForm">
        <label style={{ backgroundColor: colour }}>
          {colour ? colour : "No text"}
        </label>
        <input
          autoFocus
          type="text"
          placeholder="Enter colour name"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ColourDetection;
