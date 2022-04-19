import React, { useRef } from "react";
import "../styles/drawingPanel.scss";
import Row from "./Row";
import { exportComponentAsPNG } from "react-component-export-image";

// Props: Drawing Panel component that receives the following props from the editor component (width, height, selectedColor).

// Components imported: The row component is imported into the drawing panel and the number of rows created in the drawing panel is dictated by the height value received from the user, and this is saved into an array called rows. The rows array is then included
// inside of the 'pixels' div, which produces a div for each row.

// Features: There is a button with an onClick property that will call the exportComponentAsPNG plugin with the variable 'panelRef.' We need to reference the 'pixels' div inside of the react app, and to do this inside of a function component, we use the useRef hook with the 'panelRef' variable. Inside of the 'pixels' div, a ref attribute is added and assigned to 'panelRef'.
export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props;
  const panelRef = useRef();
  let rows = [];

  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />);
  }

  return (
    <div id='drawingPanel'>
      <div id='pixels' ref={panelRef}>
        {rows}
      </div>
      <button onClick={() => exportComponentAsPNG(panelRef)} className='button'>
        Export as PNG
      </button>
    </div>
  );
}
