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
  const [count, setCount] = useState(0);
  const checkBoxSelected = () => {
    setCheckBoxState(!checkBoxState);
  };

  const showMessageBox = () => {
    alert("Click");
  };

  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item">
          <TuyaButton
            label={"Button " + count}
            onClick={() => setCount(count + 1)}
          ></TuyaButton>
        </div>
        <div class="grid-item">
          <TuyaInput placeholder="Button"></TuyaInput>
        </div>
        <div class="grid-item">
          <TuyaCheckBox
            label="Button"
            selected={checkBoxState}
            onClick={checkBoxSelected}
          ></TuyaCheckBox>
        </div>
        <div class="grid-item">
          <TuyaButton
            iconHeight="1.5rem"
            iconName="IconCards"
            iconWidth="1.5rem"
            isIconVisible
            label="Vertical Circle"
            onClick={showMessageBox}
            shape="circle"
            vertical
          />
        </div>
        <div class="grid-item">
          <TuyaInput placeholder="TuyaInput" />
        </div>
        <div class="grid-item">
          <TuyaRadioButton disabled label="RadioButton" onClick={() => {}} />
        </div>
        <div class="grid-item">
          <TuyaButton label="Button"></TuyaButton>
        </div>
        <div class="grid-item">
          <TuyaInput disabled placeholder="Disabled" />
        </div>
        <div class="grid-item">
          <TuyaRadioButton label="Button" selected></TuyaRadioButton>
        </div>
        <div class="grid-item">
          <TuyaButton primary label="Button"></TuyaButton>
        </div>
        <div class="grid-item">
          <TuyaInput
            errMsg="Error al enviar la informacion"
            error
            placeholder="error input"
            value="not valid"
          />
        </div>
        <div class="grid-item">
          <TuyaRadioButton label="RadioButton" onClick={() => {}} size="bog" />
        </div>
        <div class="grid-item">
          <TuyaButton primary label="Button" size="big"></TuyaButton>
        </div>
        <div class="grid-item">
          <TuyaInput iconOutsideLeftName="IconAjust" placeholder="input" />
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <TuyaButton primary label="Button" disabled></TuyaButton>
        </div>
        <div class="grid-item">
          <TuyaInput iconInsideRightName="IconFunShare" placeholder="input" />
        </div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <TuyaButton primary label="Button" vertical></TuyaButton>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <TuyaButton
            primary
            label="Button"
            isIconVisible
            iconName="IconCards"
          ></TuyaButton>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
        <div class="grid-item">
          <TuyaButton
            primary
            label="Button square"
            vertical
            onClick={showMessageBox}
            isIconVisible
            iconName="IconPse"
            iconHeight="3em"
          ></TuyaButton>
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
    </div>
  );
}

export default App;
