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

    handleTaskDelete = taskToDeleteId => {
        const { tasks, pickedTask } = this.state;
        if (pickedTask && pickedTask.id === taskToDeleteId) {
            alert("Nie można usunąć aktywnego zadania");
            return;
        }
        this.setState({
            tasks: tasks.filter(task => task.id !== taskToDeleteId)
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
                            pickedTask={this.state.pickedTask}
                            onNewTaskChange={this.handleNewTaskChange}
                            onAddTaskClick={this.handleAddTaskClick}
                            onTaskDelete={this.handleTaskDelete}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default TaskPicker;
