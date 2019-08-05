import React, { Component } from "react";
import burger from "./images/menu-top.svg";
import logo from "./images/ironhack-logo.svg";


function Header(props){
    return (
        <header className="header">
        <img src={logo} width="90px"/>
        <img src={burger} width="30px"/>
    </header>     
    );
}

//   class Header extends Component {
//     render() {
//         return (
//             <header className="header">
//                 <img src={logo} width="90px"/>
//                 <img src={burger} width="30px"/>
//             </header>
//         );
//     }
// }

export default Header;