import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles/editor.scss";
import { CirclePicker } from "react-color";
import DrawingPanel from "./DrawingPanel.js";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("start drawing");
  const [selectedColor, setColor] = useState("#f44336");

  // The initializeDrawingPanel() function is used to hide the options of the game and unhide
  // the drawing panel on initial click. These useState options are set to act as toggles each time, the game
  // button is selected.
  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing"
      ? setButtonText("reset")
      : setButtonText("start drawing");
  }

  //changeColor(color)- Receives the color from the onChangeComplete event on the 'CirclePicker'.
  // The setColor state hook is used to set the color stored in 'selectedColor'

  function changeColor(color) {
    setColor(color.hex);
  }
  return (
    <div id='editor'>
      <h1>Pixel Editor</h1>
      {/* The h2 element is displayed only if hide drawing panel is true. */}
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {/* The 'options' div is displayed only if hide drawing panel is true. */}
      {/* There are two divs nested inside of the 'options' div that are used for
          storing the input for the width and height of the drawing panel. An onChange
          event is used to call the setPanelWidth and setPanelHeight state hooks
          that are responsible for passing the target value into panelWidth and panelHeight. */}
      {hideDrawingPanel && (
        <div id='options'>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
            />
            <span>Width</span>
          </div>
          <div className='option'>
            <input
              type='number'
              className='panelInput'
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
            />
            <span>Height</span>
          </div>
        </div>
      )}
      {/* On click event for this button is used to set the button text based upon 
      what the button text is equal to. */}
      <button onClick={initializeDrawingPanel} className='button'>
        {buttonText}
      </button>
      {/* The circle picker will be displayed if hideOptions (width and height) is true. */}
      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}
      {/* The drawing panel will be displayed if hideOptions (width and height) is true. */}
      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
