import "./SettingsUI.css";
import CloseButton from "../common/CloseButton/CloseButton";
import CheckBox from "../common/CheckBox/CheckBox";

const SettingsUI = () => {
  return (
    <div className="container">
      <div className="row">
        <CloseButton />
        <span className="title">Settings</span>
      </div>
      <div className="section row">
        <span>/</span>
        <div className="col">
          <span>#devs</span>
          <span>Click to change</span>
        </div>
      </div>
      <div className="section row">
        <CheckBox />
        <span>Enable Webhook</span>
      </div>
      <span className="webhookUrl">https://otiv.dev/webhook/123_123_123</span>
    </div>
  );
};

export default SettingsUI;
