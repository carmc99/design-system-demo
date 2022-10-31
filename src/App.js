import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import {
  TuyaButton,
  TuyaInput,
  TuyaCheckBox,
  TuyaRadioButton,
} from "tuya-design-system";

function App() {
  const [checkBoxState, setCheckBoxState] = useState(false);
  const checkBoxSelected = () => {
    setCheckBoxState(!checkBoxState);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ol>
          <li>
            <TuyaButton label="Tuya Button"></TuyaButton>
          </li>
          <li>
            <TuyaButton label="Tuya Button"></TuyaButton>
          </li>
          <li>
            <TuyaInput placeholder="Tuya Button"></TuyaInput>
          </li>
          <li>
            <TuyaCheckBox
              label="Tuya Button"
              selected={checkBoxState}
              onClick={checkBoxSelected}
            ></TuyaCheckBox>
          </li>
          <li>
            <TuyaRadioButton label="Tuya Button" selected></TuyaRadioButton>
          </li>
        </ol>
      </header>
    </div>
  );
}

export default App;
