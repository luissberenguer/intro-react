import React from "react";
import './TodoItem.css'
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {

    return (
        <li>
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`${props.completed && 'Completed'}`}>{props.text}</p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    )
}

export { TodoItem };