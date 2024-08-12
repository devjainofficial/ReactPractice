import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(10);

  const increment = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Value cannot exceed to 20");
      return "Value cannot exceed to 20";
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Value cannot exceed to 0");
      
      return "Value cannot exceed to 0";
    }
  };

  return (
    <>
      <h1>My Counter: {counter}</h1>
      <button onClick={increment}>Increment Counter</button>
      <button onClick={decrement}>Decrement Counter</button>
    </>
  );
}

export default App;
