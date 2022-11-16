import React, { useState } from 'react';

const AddTask = (props) => {
    let [task, setTask] = useState('')

    function handleClick(){
        let newTask ={
            task,
            id: Date.now()
        }
        props.handleNewTask(newTask)
        setTask('')
    }


    return (
        <>
            <h1>Todo App</h1>
            <div class = "search-part">
                <input 
                    onChange = {(e) => setTask(e.target.value)} 
                    type="text" 
                    placeholder="Type your work to do..."
                    value = {task}
                    required
                    />
                <button class = 'add-btn' onClick = {handleClick}>Add Task</button>
            </div>
        </>
    );
};

export default AddTask;