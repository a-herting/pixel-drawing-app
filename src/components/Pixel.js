import React, { useState } from "react";
import "../styles/pixel.scss";

// Props: The pixel component receives the following props from the row component (selectedColor).

export default function Pixel(props) {
  const { selectedColor } = props;

  // Background color of the pixel
  const [pixelColor, setPixelColor] = useState("#fff");
  // Allows us to use the old color when we are hovering over a pixel
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);

  // Function sets the pixel color with the setPixelColor() state hook. The setCanChangeColor state hook
  // is set to false to prevent the user from changing the current pixel color until the user has navigated
  // away to another pixel.
  function applyColor() {
    setPixelColor(selectedColor);
    setCanChangeColor(false);
  }

  // Function sets the old color to the pixel color and the pixel color to the selected color.
  // By setting the old color, we are reserving the value for the old color, so that we know
  // which color to switch back to once we hover over a different pixel.
  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(selectedColor);
  }

  // Function that resets the color of the pixel to the old color if the variable canChangeColor is false.
  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  }

  return (
    <div
      className='pixel'
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
