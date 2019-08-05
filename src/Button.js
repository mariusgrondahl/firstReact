import React, { Component } from "react";


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Awesome"
        };
      }

    componentDidMount() {
        this.setState({
            title: "DidMount"
        })
    }
  
    componentWillUnmount() {
        this.setState({
            title: "Fuck"
        })  
    }

    changeText() {
        this.setState({
          title: "Clicked"
        });
      }

    render() {
        return(
            <button href={this.props.link} onClick={() => this.changeText()}>{this.state.title}</button>
        );
    }

}

export default Button;