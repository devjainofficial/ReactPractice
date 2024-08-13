import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8); //Using a useState hook to take length of slider input.
  const [isNumber, setIsNumber] = useState(false); //Using a useState hook to take boolean value isNumber is needed
  const [isCharacter, setIsCharacter] = useState(false); //Using a useState hook to take boolean value isCharacter is needed
  const [password, setPassword] = useState(""); //Using a useState hook to get and set password input

  let passwordRef = useRef(null); //Using a useRef hook to take reference of password value input
  
  const passwordGenerator = useCallback(() => { 
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) {
      str += "0123456789";
    }
    if (isCharacter) {
      str += "!@#$%^&*()_+{}[]/;'.,\|";
    }
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumber, isCharacter]); //Using a useCallback(fn, [dependencies]) hook to cache a function definition between re-renders.

  const passwordCopyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [length, password])

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacter, isNumber, passwordGenerator]);

  return (
    <>
      <h1>Password Generator</h1>
      <div>
        <input type="text" value={password} ref={passwordRef} readOnly />
      </div>
      <button onClick={passwordCopyToClipboard}>Copy to Clipboard</button>
      <div>
        <label>
          Length:
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
          />
          <span>{length}</span>
        </label>
      </div>
      <div>
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={isNumber}
            onChange={() => setIsNumber(!isNumber)}
          />
        </label>
      </div>
      <div>
        <label>
          Include Special Characters:
          <input
            type="checkbox"
            checked={isCharacter}
            onChange={() => setIsCharacter(!isCharacter)}
          />
        </label>
      </div>
    </>
  );
}

export default App;
