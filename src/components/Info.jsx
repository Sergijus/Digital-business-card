import React from "react";
import image from "../assets/Srdjan.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={image} className="info--img" />
      <div className="info--text">
        <h2 className="info--name">Srdjan Marinkovic</h2>
        <h3 className="info--title">Frontend developer wannabe</h3>
        <h4 className="info--company">@elementor.com</h4>
        <a
          role="button"
          className="info--button"
          href="https://srdjanm.com"
          target="_blank"
        >
          Website
        </a>
      </div>
    </div>
  );
}
