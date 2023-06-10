import React, { useState, useEffect } from "react";
import "./right.scss";
import amazon from "../../../images/amazon1.png"
import facebook from "../../../images/facebook.png"
import gmail from "../../../images/gmail.png"
import instagram from "../../../images/instagram.png"
import google_map from "../../../images/google_map.png"
import twitter from "../../../images/twitter.png"
import whatsapp from "../../../images/whatsapp2.png"
import youtube from "../../../images/youtube.png"


export const Right = () => {


  return (

    <div className="right">
      <a className="card" href="https://www.amazon.de">
        <img src={amazon}></img>
        <p>Amazon</p>
      </a>
      <a className="card" href="https://www.facebook.com">
        <img src={facebook}></img>
        <p>Facebook</p>
      </a>
      <a className="card" href="https://www.instagram.com">
        <img src={instagram}></img>
        <p>Instagram</p>
      </a>
      <a className="card" href="https://www.twiiter.com">
        <img src={twitter}></img>
        <p>Twitter</p>
      </a>
      <a className="card" href="https://www.gmail.com">
        <img src={gmail}></img>
        <p>Gmail</p>
      </a>
      <a className="card" href="https://www.google.at/maps">
        <img src={google_map}></img>
        <p>Google map</p>
      </a>
      <a className="card" href="https://web.whatsapp.com/">
        <img src={whatsapp}></img>
        <p>Whatsapp</p>
      </a>
      <a className="card" href="https://youtube.com/">
        <img src={youtube}></img>
        <p>Youtube</p>
      </a>

    </div>
  );
};
