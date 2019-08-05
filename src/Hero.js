import React, { Component } from "react";
import Button from "./Button";
import "./Hero.css"

class Hero extends Component {
    render() {
        return(
            <div className="Hero">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <Button  link="#"/>
            </div>
        )
    }

}

export default Hero