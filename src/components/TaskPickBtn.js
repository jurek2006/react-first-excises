// komponent funkcyjny
import React from "react";

export function TaskPickBtn(props) {
    return (
        <button disabled={props.isDisabled} onClick={props.onClick}>
            {props.taskName}
        </button>
    );
}

export default TaskPickBtn;
