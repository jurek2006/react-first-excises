import React, { Component } from "react";
import { TaskAdd } from "./TaskAdd";
import { Consumer } from "../context";

export class TaskManager extends Component {
    onDeleteClick = (id, dispatch) => {
        dispatch({ type: "DELETE_TASK", payload: id });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { tasks, pickedTask, dispatch } = value;
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
                                                    pickedTask !== null &&
                                                    pickedTask.id === task.id
                                                }
                                                data-key={task.id}
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    task.id,
                                                    dispatch
                                                )}
                                            >
                                                X
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                            <TaskAdd />
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default TaskManager;
