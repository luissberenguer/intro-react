import React from "react";
import './TodoIcon.css'
// import { ReactComponent as CheckSVG} from '../../public/check.svg'
// import { ReactComponent as DeleteSVG} from '../../public/delete.svg'

import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const iconTypes = {
    "check": color => (
        <AiFillCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <AiFillDelete className="Icon-svg Icon-svg--delete" fill={color}/>
    )
}

function TodoIcon ({ type, color = '#CACFD2', onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
            >
                {iconTypes[type](color)}
        </span>
    )
}

export {TodoIcon}