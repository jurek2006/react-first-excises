import React, { Component } from "react";
import { TaskAdd } from "./TaskAdd";

export class TaskManager extends Component {
    render() {
        const { tasks } = this.props;

        return (
            <div>
                <h1>Zadania:</h1>
                <ul>
                    {tasks.map(task => {
                        return <li key={task.id}>{task.name}</li>;
                    })}
                </ul>
                <TaskAdd
                    onAddTaskClick={this.props.onAddTaskClick}
                    newTask={this.props.newTask}
                    onNewTaskChange={this.props.onNewTaskChange}
                />
            </div>
        );
    }
}

export default TaskManager;
