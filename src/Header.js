import React, { Component } from "react";
import burger from "./images/menu-top.svg";
import logo from "./images/ironhack-logo.svg";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} width="90px"/>
                <img src={burger} width="30"/>
            </header>
        );
    }
}

export default Header;