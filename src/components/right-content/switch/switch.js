
import { useState } from "react";
import "./switch.scss";

export const Switch = () => {
  const [active, setActive] = useState(false);
  function handle(){
    setActive(!active)
    const main = document.querySelector('.main')
    if(!active){
      main.classList.add('active');
     }else{
      main.classList.remove('active');
    }
  }
  return (
      <div className="switch">
        <input type="checkbox" name="toggle" onClick={handle} />
        <label htmlFor="toggle">
          <i className="bulb">
            <span className="bulb-center"></span>
          </i>
        </label>
      </div>
  );
};


