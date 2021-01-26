import { useState } from 'react';
const randomColor = require('randomcolor');

export default function ColorGenerator() {
  const [color, setColor] = useState(randomColor);

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
