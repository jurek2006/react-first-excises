import React, { Component } from "react";
import { Consumer } from "../context";

export class TaskAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTaskName: ""
        };
    }

    handleAddTaskSubmit = (dispatch, e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: this.state.newTaskName
        });
        this.setState({
            newTaskName: ""
        });
    };

    render() {
        const { newTaskName } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <h2>Dodaj zadanie</h2>
                            <form
                                onSubmit={this.handleAddTaskSubmit.bind(
                                    this,
                                    dispatch
                                )}
                            >
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Nowe zadanie"
                                    value={newTaskName}
                                    onChange={e =>
                                        this.setState({
                                            newTaskName: e.target.value
                                        })
                                    }
                                />
                                <input
                                    type="submit"
                                    disabled={newTaskName.length <= 0}
                                    value="Dodaj"
                                />
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default TaskAdd;
