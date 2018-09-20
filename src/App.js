import React, { Component } from "react";
// import "./App.css";ś
import { TaskPicker } from "./components/TaskPicker";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TaskPicker />
            </div>
        );
    }
}

export default App;
