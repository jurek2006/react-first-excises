import React, { Component } from "react";
import { TaskPickBtn } from "./TaskPickBtn";
import { TaskManager } from "./TaskManager";

export class TaskPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedTask: null,
            tasks: [
                "Kurs Node",
                "Kurs React",
                "Projekt Pomidorek App",
                "Organizacyjne",
                "Inne"
            ]
        };
    }

    handleClick(task) {
        this.setState({
            pickedTask: task
        });
    }

    handleAddTaskClick = taskName => {
        console.log("Z TaskPickera", taskName);
        console.log(this.state.tasks);
        this.setState({ tasks: [...this.state.tasks, taskName] });
    };

    renderTasksBtns() {
        const { tasks } = this.state;
        return (
            <div>
                {tasks.map(taskName => (
                    <TaskPickBtn
                        taskName={taskName}
                        key={taskName}
                        isDisabled={this.state.pickedTask}
                        onClick={() => this.handleClick(taskName)}
                    />
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>
                    Wybrane zadanie:{" "}
                    {this.state.pickedTask ? (
                        <span>
                            {this.state.pickedTask}
                            <button
                                onClick={() => {
                                    this.setState({ pickedTask: null });
                                }}
                            >
                                Zmień
                            </button>
                        </span>
                    ) : (
                        "Nie wybrano"
                    )}
                </div>
                <div>{this.renderTasksBtns()}</div>
                <div>
                    {
                        <TaskManager
                            tasks={this.state.tasks}
                            onAddTaskClick={this.handleAddTaskClick}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default TaskPicker;
