import { useState } from "react";
import "./body.scss";
import {Weather} from "../../components/body/weather/weather"
import {Nav} from "../../components/body/nav/nav"
import {Left} from "../../components/body/left/left"
import {Middle} from "../../components/body/middle/middle"
import {Right} from "../../components/body/right/right"

export const Main = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <main className="main">
        <div className="container top-nav-container"><Nav/></div>
        <section className="main-container">
          <div className="container left-container"><Left/></div>
          <div className="container middle-container"><Middle/></div>
          <div className="container right-container"><Right/></div>
        </section>
    </main>
  );
};
