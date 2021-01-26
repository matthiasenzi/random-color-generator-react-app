import { useState } from 'react';

// Library to get the colors.
const randomColor = require('randomcolor');

// Component and state declaration.
export default function ColorGenerator() {
  const [color, setColor] = useState(randomColor);

  // Return Text, Color Button and Hex Code.
  return (
    <div>
      <h1>RANDOM COLOR GENERATOR</h1>

      <button
        onClick={() => {
          setColor(randomColor);
        }}
      >
        NEW COLOR
      </button>

      <h2 style={{ color: color }}>RANDOM COLOR = {color}</h2>
    </div>
  );
}
