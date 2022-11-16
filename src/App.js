import { useState } from "react";
import "./App.css";
import {
  TuyaButton,
  TuyaInput,
  TuyaCheckBox,
  TuyaRadioButton,
  TuyaButtonReact
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
      <div className="grid-container">
        <div className="grid-item">
          <TuyaButton
            label={"Button " + count}
            onClick={() => setCount(count + 1)}
          ></TuyaButton>
        </div>
        <div className="grid-item">
          <TuyaInput placeholder="Button"></TuyaInput>
        </div>
        <div className="grid-item">
          <TuyaCheckBox
            label="Button"
            selected={checkBoxState}
            onClick={checkBoxSelected}
          ></TuyaCheckBox>
        </div>
        <div className="grid-item">
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
        <div className="grid-item">
          <TuyaInput placeholder="TuyaInput" />
        </div>
        <div className="grid-item">
          <TuyaRadioButton disabled label="RadioButton" onClick={() => {}} />
        </div>
        <div className="grid-item">
          <TuyaButton label="Button"></TuyaButton>
        </div>
        <div className="grid-item">
          <TuyaInput disabled placeholder="Disabled" />
        </div>
        <div className="grid-item">
          <TuyaRadioButton label="Button" selected></TuyaRadioButton>
        </div>
        <div className="grid-item">
          <TuyaButton primary label="Button"></TuyaButton>
        </div>
        <div className="grid-item">
          <TuyaInput
            errMsg="Error al enviar la informacion"
            error
            placeholder="error input"
            value="not valid"
          />
        </div>
        <div className="grid-item">
          <TuyaRadioButton label="RadioButton" onClick={() => {}} size="bog" />
        </div>
        <div className="grid-item">
          <TuyaButton primary label="Button" size="big"></TuyaButton>
        </div>
        <div className="grid-item">
          <TuyaInput iconOutsideLeftName="IconAjust" placeholder="input" />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <TuyaButton primary label="Button" disabled></TuyaButton>
        </div>
        <div className="grid-item">
          <TuyaInput iconInsideRightName="IconFunShare" placeholder="input" />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <TuyaButton primary label="Button" vertical></TuyaButton>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <TuyaButton
            primary
            label="Button"
            isIconVisible
            iconName="IconCards"
          ></TuyaButton>
        </div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
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
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <TuyaButtonReact
          primary
          label="Button React"
          ></TuyaButtonReact>
        </div>
      </div>
    </div>
  );
}

export default App;
