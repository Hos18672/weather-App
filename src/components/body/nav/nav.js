import { useState } from "react";
import "./nav.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const TopNav = () => {
  return (
    <div className="nav card ">
      <p>RH</p>
      <div className="menu-container">
        <ul className="menu movies">
          <p>Movies</p>
          <div className="card">
            <li>
              <a href="https://movies7.to/home">Movies7</a>
            </li>
            <li>
              <a href="https://www.farsi1.in/new-home/">Farsi1</a>
            </li>
          </div>
        </ul>
        <ul className="menu tools">
        <p>tools</p>
          <div className="card">
            <li>
              <a href="https://www.sejda.com/">Sejda</a>
            </li>
            <li>
              <a href="https://www.imgkits.com/inpaint">Watermark remover</a>
            </li>
            <li>
              <a href="https://www.ovh.com/auth/?action=disconnect&onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2F%23%2Fhub">Ovh</a>
            </li>
            <li>
              <a href="https://app.netlify.com">Netlify</a>
            </li>
            <li>
              <a href="https://cleanup.pictures/">Remove Objects of pictures</a>
            </li>
            <li>
              <a href="https://replicate.com/tencentarc/gfpgan">Improve picture Quality</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
