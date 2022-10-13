import React from "react";
import logo from "../images/Troll Face.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header">
                <img className="header" src={logo} alt="meme-generator" />
                <h2 className="header">Meme Generator</h2>
            </div>
            <p className="header">React Course - Project 3</p>
        </div>
    )
}