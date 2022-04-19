import React from "react";
import "../styles/row.scss";
import Pixel from "./Pixel.js";

// Props: The row component receives the following props from the editor component (width, selectedColor).

// Components imported: The pixel component is imported into the row component and the number of pixels created in the row component is dictated by the width value received from the user, and this is saved into an array called pixels. The pixels array is then included inside of the 'row' div, which produces a div for each pixel.

export default function Row(props) {
  const { width, selectedColor } = props;

  let pixels = [];

  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }
  return <div className='row'>{pixels}</div>;
}
