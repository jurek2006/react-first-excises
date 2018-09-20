import React, { Component } from "react";

export class TaskAdd extends Component {
    render() {
        return (
            <div>
                <h2>Dodaj zadanie</h2>
                <form onSubmit={this.props.onAddTaskClick}>
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
