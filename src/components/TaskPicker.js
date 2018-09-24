import React, { Component } from "react";
import { TaskPickBtn } from "./TaskPickBtn";
import { TaskManager } from "./TaskManager";
import { Consumer } from "../context";

export class TaskPicker extends Component {
    renderTasksBtns(tasks, pickedTask) {
        return (
            <div>
                {tasks.map(task => (
                    <TaskPickBtn
                        task={task}
                        key={task.id}
                        isDisabled={pickedTask}
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { pickedTask, tasks, dispatch } = value;
                    return (
                        <div>
                            <div>
                                Wybrane zadanie:{" "}
                                {pickedTask ? (
                                    <span>
                                        {pickedTask.name}
                                        <button
                                            onClick={() => {
                                                dispatch({
                                                    type: "CANCEL_TASK"
                                                });
                                            }}
                                        >
                                            Zmień
                                        </button>
                                    </span>
                                ) : (
                                    "Nie wybrano"
                                )}
                            </div>
                            <div>{this.renderTasksBtns(tasks, pickedTask)}</div>
                            <div>{<TaskManager />}</div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default TaskPicker;
