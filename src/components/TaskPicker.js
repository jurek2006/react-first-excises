import React, { Component } from "react";
import { TaskPickBtn } from "./TaskPickBtn";

export class TaskPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickedTask: null
        };
    }

    handleClick(task) {
        this.setState({ pickedTask: task });
    }

    renderBtn(taskName) {
        return (
            <TaskPickBtn
                taskName={taskName}
                isDisabled={this.state.pickedTask}
                onClick={() => this.handleClick(taskName)}
            />
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
                <div>
                    {this.renderBtn("Kurs Node")}
                    {this.renderBtn("Kurs React")}
                    {this.renderBtn("Projekt Pomidorek App")}
                    {this.renderBtn("Organizacyjne")}
                    {this.renderBtn("Inne")}
                </div>
            </div>
        );
    }
}

export default TaskPicker;
