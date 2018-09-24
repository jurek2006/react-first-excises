import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, { name: action.payload, id: uuid() }]
            };
        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "PICK_TASK":
            return {
                ...state,
                pickedTask: action.payload
            };
        case "CANCEL_TASK":
            return {
                ...state,
                pickedTask: null
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        pickedTask: null,
        tasks: [
            { name: "Kurs Node", id: uuid() },
            { name: "Kurs React", id: uuid() },
            { name: "Projekt Pomidorek App", id: uuid() },
            { name: "Organizacyjne", id: uuid() },
            { name: "dupa", id: uuid() }
        ],
        newTask: "",
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
