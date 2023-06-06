import { useState } from "react";
import "./left.scss";
import {Weather} from "../weather/weather"
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

export const Left = () => {
  const [value, onChange] = useState(new Date());
  return (
    <main className="left">
        <div className="weather-container card">
          <Weather/>
        </div>
        <div className="calendar-container card">
          <Calendar onChange={onChange} value={value} />
        </div>
    </main>
  );
};
