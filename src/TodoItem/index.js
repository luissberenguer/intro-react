import React from "react";
import './TodoItem.css'

function TodoItem(props) {
    // const onComplete = () => {
    //     alert(`Ya completaste el todo ${props.text}`)
    // }

    // const onDelete = () => {
    //     alert(`Borraste el todo ${props.text}`)
    // }

    return (
        <li>
            <span className={`Icon Icon-checked ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >✔️</span>
            <p className={`${props.completed && 'Completed'}`}>{props.text}</p>
            <span className={`Icon Icon-delete ${props.completed && 'TodoItem-p--completed'}`}
                onClick={props.onDelete}
            >❌</span>
        </li>
    )
}

export { TodoItem };