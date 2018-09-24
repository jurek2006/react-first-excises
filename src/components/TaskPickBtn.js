import React, { Component } from "react";
import { Consumer } from "../context";

export class TaskPickBtn extends Component {
    pickTask(task, dispatch) {
        dispatch({ type: "PICK_TASK", payload: task });
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <button
                            disabled={this.props.isDisabled}
                            onClick={this.pickTask.bind(
                                this,
                                this.props.task,
                                dispatch
                            )}
                        >
                            {this.props.task.name}
                        </button>
                    );
                }}
            </Consumer>
        );
    }
}

export default TaskPickBtn;
