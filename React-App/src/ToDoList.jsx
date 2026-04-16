import React, {useState} from 'react';

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat Breakfast", "Go to the gym", "Finish React project"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }   
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }
    }

    return(<div className="ToDoList">
        <h1>To-Do List</h1>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
            <button className="addbutton"
                    onClick={addTask}>Add Task

            </button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className='deletebutton' onClick={ () => deleteTask(index)}>Delete</button>
                <button className='movebutton' onClick={ () => moveTaskUp(index)}>Move Up</button>
                <button className='movebutton' onClick={ () => moveTaskDown(index)}>Move Down</button>
            </li>
            )}
        </ol>
    </div>

    );
}
export default ToDoList;