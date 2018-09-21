import React, { Component } from "react";
import { TaskAdd } from "./TaskAdd";

export class TaskManager extends Component {
    render() {
        const { tasks, pickedTask, newTask } = this.props;

        return (
            <div>
                <h1>Zadania:</h1>
                <ul>
                    {tasks.map(task => {
                        return (
                            <li key={task.id}>
                                {task.name}{" "}
                                <button
                                    disabled={
                                        pickedTask && pickedTask.id === task.id
                                    }
                                    data-key={task.id}
                                    onClick={e => {
                                        this.props.onTaskDelete(
                                            e.target.dataset.key
                                        );
                                    }}
                                >
                                    X
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <TaskAdd
                    newTask={newTask}
                    onAddTaskClick={this.props.onAddTaskClick}
                    onNewTaskChange={this.props.onNewTaskChange}
                />
            </div>
        );
    }
}

export default TaskManager;
