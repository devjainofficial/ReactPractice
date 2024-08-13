import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="changeColor" style={{ backgroundColor: color }}>
      <div className="colorBar">
        <div className="colorName">
          <button
            className="myButton"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
        </div>
        <div className="colorName">
          <button
            className="myButton"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
        </div>
        <div className="colorName">
          <button
            className="myButton"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
