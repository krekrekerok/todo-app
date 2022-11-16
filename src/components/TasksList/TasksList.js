import React from 'react';

const TasksList = (props) => {

    return (
        <div class = 'todos'>
            <h2>Tasks to complete:</h2>
            {props.tasks.map((item, index) => (
                <>
                    <ul class = 'todo-list' key = {item.id}>
                        <li class = 'todo-item'>{item.task}</li>
                        <li class = 'todo-item'>
                            <button class = 'edit-btn'
                                onClick = {() => props.handleEditIndex(index)}
                                >
                                Edit
                            </button>
                            <button class = 'delete-btn'
                                onClick={()=> props.handleDeleteTodo(item.id)}
                            > 
                                Delete 
                            </button>
                        </li>
                    </ul>
                    <hr/>
                </>
            ))}
        </div>
    );
};

export default TasksList;