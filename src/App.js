import './App.css'
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TasksList from './components/TasksList/TasksList';
import EditTasks from './components/EditTasks/EditTasks';

function App() {
  // хранение всех наших контактов
  let [tasks, setTasks] = useState([])

  // хранение контактов на редактирование
  let [editTask, setEditTask] = useState({})

  // хранение булевых значений
  let [isEdit, setIsEdit] = useState(false)

  function handleNewTask(newTask){
    let newTasksArray = [...tasks]
    newTasksArray.push(newTask)

    setTasks(newTasksArray)
  }

  function handleDeleteTask(id){
    let newTasksArray = tasks.filter(item =>{
      return item.id !== id
    })
    setTasks(newTasksArray)
  }

  function handleEditIndex(index){
    setIsEdit(true)
    setEditTask(tasks[index])
  }

  function handleSaveEditedTask(newTask){
    let newTasksArray = tasks.map(item =>{
      if(item.id === newTask.id){
        return newTask
      }
      return item
    })
    setTasks(newTasksArray)
    setIsEdit(false)
  }

  return (
    <div className="App">
      <AddTask
        handleNewTask = {handleNewTask}
      />
      {isEdit ?<EditTasks
        editTask = {editTask}
        handleSaveEditedTask = {handleSaveEditedTask}
      />:null
      }
      
      <TasksList
        tasks={tasks}
        handleDeleteTask = {handleDeleteTask}
        handleEditIndex = {handleEditIndex}
      />
    </div>
  );
}

export default App;
