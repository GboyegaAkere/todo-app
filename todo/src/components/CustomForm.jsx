import React from "react";
import {AiOutlinePlus} from "react-icons/ai"

function CustomForm({addTask}){
    const [task, setTask] = React.useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        addTask({
            name:task,
            checked:false,
            id: Date.now()
        })
        setTask("")
    }

    return(
        <form className="todo" onSubmit={handleSubmit}>
           <div className="wrapper">
            <input type="text"
             id="task"
             className="input"
             required
             autoFocus
             maxLength={60}
             placeholder ="enter task"
             value={task}
             onInput ={(e)=> setTask(e.target.value)}
 
            />

            <label htmlFor="" className="label">enter task</label>
            
           </div> 
           <button className="btn" aria-label="add task" type="submit"><AiOutlinePlus/></button>
        </form>
    )
}
export default CustomForm