import React, { Component } from "react";
import { TaskAdd } from "./TaskAdd";

export class TaskManager extends Component {
    handleAddTaskClick(taskName) {
        console.log("Z managera", taskName);
        this.props.onAddTaskClick(taskName);
    }

    render() {
        const { tasks } = this.props;

        return (
            <div>
                <h1>Zadania:</h1>
                <ul>
                    {tasks.map(task => {
                        return <li key={task}>{task}</li>;
                    })}
                </ul>
                <TaskAdd
                    onAddTaskClick={this.handleAddTaskClick.bind(this)}
                    newTaskName=""
                />
                {/* <TaskAdd onAddTaskClick={this.props.onAddTaskClick} /> */}
            </div>
        );
    }
}

export default TaskManager;
