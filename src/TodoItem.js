import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li>
            <span className={`Icon Icon-checked ${props.completed && 'Icon-check--active'}`}>✔️</span>
            <p className={`${props.completed && 'Completed'}`}>{props.text}</p>
            <span className={`Icon Icon-delete ${props.completed && 'TodoItem-p--completed'}`}>❌</span>
        </li>
    )
}

export { TodoItem };