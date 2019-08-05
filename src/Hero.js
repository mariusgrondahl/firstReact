import React, { Component } from "react";
import Button from "./Button";

class Hero extends Component {
    render() {
        return(
            <div className="Hero">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
                <Button title="Awesome" link="#"/>
            </div>
        )
    }

}

export default Hero