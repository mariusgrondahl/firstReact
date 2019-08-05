import React, { Component } from "react";

class Wrapper extends Component {
    render() {
        return(
            <div className="wrapper" id="wrapper">
                {this.props.children}
            </div>
        )
    }

}

export default Wrapper;