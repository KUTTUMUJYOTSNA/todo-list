import React ,{usestate} from 'react';


export default function Todoform(props)
{  //state
    const[input , setInput] =usestate('');
const handleChange= e =>
{
    setInput(e.target.value)
}
const handlesubmit =(e)  =>
{
    e.preventDefault();
    Props.addTask.addTask({
    id: Math.floor(Math.random()* 1000000),
    text: input,
    iscomplete: false
    })
    setInput('')
    
}
    return  (
        <form classNmae="todo-form">
    <input type="text" placeholder="Add a todo" onChange={handlechange} className="todo-input" value={input} name="text" />
    <button type="submit" onclick={handlesubmit} className="todo-btn">ADD TODO</button>
        </form>
    );
}