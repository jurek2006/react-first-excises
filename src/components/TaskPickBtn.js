// komponent funkcyjny
import React from "react";

export function TaskPickBtn(props) {
    return (
        <button disabled={props.isDisabled} onClick={props.onClick}>
            {props.task.name}
        </button>
    );
}

export default TaskPickBtn;
