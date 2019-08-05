import React, { Component } from "react";

class Header extends Component {
    
    render() {
        const headerStyle = {
            position: 'absolute',
            top: '0',
            width: '100%',
            color: '#fff',
            background: '#000',
            height: '50px',
            fontSize: '20px'
        }
        return (
            <header style={headerStyle} >Hei {this.props.name} {this.props.message}</header>
        );
    }
}

export default Header;