import React from 'react'
//import './TodoItem.css';

const TodoItem = ({ name, done, id }) => {
    return (
        <div className='todoItem'>
            {/** checkbox */}
            <p>{name}</p>
        </div>
    )
}

export default TodoItem;
