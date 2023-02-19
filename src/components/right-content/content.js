import "./content.scss";
import { Switch } from "./switch/switch";
import { MainContainer } from "./main/main";

export const Content = () => {
  return (
    <div className="right-menu-container">
      <div className="top-container">
      <Switch/>
      </div>
      <div className="content-container">
        <MainContainer/>
      </div>
    </div>
  );
};
