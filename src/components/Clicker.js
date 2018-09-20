import React, { Component } from "react";

export class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            name: "Józek"
        };
    }

    handleClick() {
        this.setState({
            isClicked: !this.state.isClicked,
            name: "Jurek"
        });
    }

    render() {
        return (
            <button
                disabled={this.state.isClicked}
                onClick={this.handleClick.bind(this)}
            >
                Kliknij mnie, {this.state.name}
            </button>
        );
    }
}
export default Clicker;
