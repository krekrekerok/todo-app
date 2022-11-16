import React, { useState } from 'react';

const EditTasks = (props) => {

    let [task, setTask] = useState(props.editTask.task)

    function handleSaveClick(){
        let todo = {...props.editTask}
        console.log(todo);
        todo.task = task

        props.handleSaveEditedTask(todo)
        setTask('')
    }

    return (
        <div class = 'edit-part'>
            <h2>Editing task</h2>
             <input 
                onChange = {(e) => setTask(e.target.value)} 
                type="text" 
                placeholder="Enter a task to do"
                value = {task}
            />
            <button class = 'save-btn' onClick = {handleSaveClick}>Save</button>
        </div>
    );
};

export default EditTasks;