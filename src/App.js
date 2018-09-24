import React, { Component } from "react";
// import "./App.css";ś
import { Provider } from "./context";
import { TaskPicker } from "./components/TaskPicker";

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <TaskPicker />
                </div>
            </Provider>
        );
    }
}

export default App;
