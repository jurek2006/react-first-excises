import React, { Component } from "react";
import { TaskPickBtn } from "./TaskPickBtn";
import { TaskManager } from "./TaskManager";
import uuid from "uuid";

export class TaskPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedTask: null,
            tasks: [
                { name: "Kurs Node", id: uuid() },
                { name: "Kurs React", id: uuid() },
                { name: "Projekt Pomidorek App", id: uuid() },
                { name: "Organizacyjne", id: uuid() },
                { name: "Inne", id: uuid() }
            ],
            newTask: ""
        };
    }

    handleTaskClick(pickedTask) {
        this.setState({
            pickedTask: pickedTask
        });
    }

    handleAddTaskClick = () => {
        this.setState({
            tasks: [
                ...this.state.tasks,
                { name: this.state.newTask, id: uuid() }
            ],
            newTask: ""
        });
    };

    handleNewTaskChange = newTaskName => {
        this.setState({
            newTask: newTaskName
        });
    };

    renderTasksBtns() {
        const { tasks } = this.state;
        return (
            <div>
                {tasks.map(task => (
                    <TaskPickBtn
                        task={task}
                        key={task.id}
                        isDisabled={this.state.pickedTask}
                        onClick={() => this.handleTaskClick(task)}
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
                            {this.state.pickedTask.name}
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
                            newTask={this.state.newTask}
                            onNewTaskChange={this.handleNewTaskChange}
                            onAddTaskClick={this.handleAddTaskClick}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default TaskPicker;
