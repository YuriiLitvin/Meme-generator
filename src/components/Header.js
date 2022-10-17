import React from "react";
import logo from "../images/Troll Face.png";

export default function Header() {
    return (
        <header className="header">
                <img className="header--image" src={logo} alt="meme-generator" />
                <h2 className="header--title">Meme Generator</h2>
            <p className="header--project">React Course - Project 3</p>
        </header>
    )
}