import React from "react";
import "./Hero.css";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-heading">Put anything you want</h2>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur Adipisicing elit. Soluta
            tenetur iste ipsa, ullam odio ab, dicta cupiditate quo facilis
            provident ea? Vel pariatur optio voluptatibus mollitia, totam beatae
            libero sed?
          </p>
        </div>
        <div className="hero-button">
          <div>Button</div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
        <p>put your favourite image</p>
      </div>
    </div>
  );
};

export default Hero;
