import React from "react";
import logo from "../images/Troll Face.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header--left-part">
                <img className="header--logo" src={logo} alt="meme-generator" />
                <h2 className="header--title">Meme Generator</h2>
            </div>
            <p className="header--right-part">React Course - Project 3</p>
        </div>
    )
}