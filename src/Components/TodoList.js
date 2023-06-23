import React  from 'react';
import {uswestate } from 'react/cjs/react/development';
import Todokform from './TodoForm'
export default function TodoList()
{  
//state array which hold all todos
const [todos, setTodos]=usestae([]);

//Add todo to list
const addTask = task =>{
    if (!task.text)
    {
        return
    }
 //const newtodos=[task,...todos];
setTodos(newTodos);
}
// remove todo from list
const removeTask=id =>
{
    let updatedTasks=[...todos].filter(task=>task.id != id)
    setTodos(updatedTasks)
}
//task is completed
const completeTask=id=>
{
    let UpdatedTasks=todos.map(todo =>{
        if(todo.id == id)
        {
            todo.iscomplete =true;
        }
        return todo;

    })
    setTodos(updatedTasks)
}
    return <div>
        <Taskform>addtask={addTak}</Taskform>
    </div>
}