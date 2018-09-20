import React, { Component } from "react";
import "./App.css";
import { Clicker } from "./components/Clicker";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Clicker name="Jurek" />
                <Clicker name="Franek" />
            </div>
        );
    }
}

export default App;
