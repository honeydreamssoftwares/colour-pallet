import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerProps {
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onChange }) => {
  const [color, setColor] = useState('#fff');

  const handleChange = (color: { hex: string }) => {
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div>
      <SketchPicker color={color} onChange={handleChange} />
    </div>
  );
};
/* 
interface AppState {
  backgroundColor: string;
  colorPalette: any; // adjust the type to match the expected response from the OpenAI LLM endpoint
} */


interface ColorPalette {
  colors: string[];
}

 const App: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [colorPalette] = useState<ColorPalette | null>(null);

  useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor]);

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };



  return (
    <div>
      <ColorPicker onChange={handleColorChange} />
      {colorPalette && (
        <div>
          <h2>Color Palette:</h2>
          <ul>
            {colorPalette.colors.map((color: string) => (
              <li key={color}>{color}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;