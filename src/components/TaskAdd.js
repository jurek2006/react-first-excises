import React, { Component } from "react";

export class TaskAdd extends Component {
    handleAddTaskClick = e => {
        e.preventDefault();
        this.props.onAddTaskClick("testTask");
    };

    render() {
        return (
            <div>
                <h2>Dodaj zadanie</h2>
                <form onSubmit={this.handleAddTaskClick}>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Nowe zadanie"
                    />
                    <input type="submit" value="Dodaj" />
                </form>
            </div>
        );
    }
}

export default TaskAdd;
