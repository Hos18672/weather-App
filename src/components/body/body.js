import { useState } from "react";
import "./body.scss";
import {Menu} from "./../left-content/menu"
import {Content} from "../right-content/content"

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <div className="left-container">
        <div className="left-content-container"><Menu/></div>
      </div>
      <div className="right-container">
        <div className="right-content-container"><Content/></div>
      </div>
    </main>
  );
};
