import React from "react";
import '../css/TodoItem.css'

function TodoItem ({onComplete, onDelete, text}){

    return (
        <li className='TodoItem'>
            <span 
            className='TodoItem-hecho'
            onClick={onComplete}
            >
                H
            </span>


            <p className='TodoItem-text'>{text}</p>

            <span 
            className='TodoItem-x'
            onClick={onDelete}
            >
                x
            </span>
        </li>
    )
}

export { TodoItem };