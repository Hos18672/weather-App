import { useState } from "react";
import "./middle.scss";

export const Middle = () => {
  return (
    <main className="middle">
      <div className="clock">
        <h1>
          22:30
        </h1>
      </div>
      <div className="card search">Search</div>
      <div className="links">
        <div className="card link">1</div>
        <div className="card link">2</div>
        <div className="card link">3</div>
        <div className="card link">4</div>
        <div className="card link">5</div>
        <div className="card link">6</div>
      </div>
    </main>
  );
};
