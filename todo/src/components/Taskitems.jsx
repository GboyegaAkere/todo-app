import React from "react";
import styles from "./TaskList.module.css"
import {BiCheckbox} from "react-icons/bi"
import {BiEdit} from "react-icons/bi"
import {MdDelete} from "react-icons/md"

function TaskItems({task}){
    const [checked, setChecked] = React.useState(task.checked)
        
    const handleChange =(e)=>{
        setChecked(!checked)
    }

    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
             <input type="checkbox"
              checked={checked}
               name={task.name} 
               id={task.id} 
               className={styles.checkbox}
              onChange={handleChange}
             />
             <label htmlFor={task.id} className={styles.label}>{task.name} <p className={styles.checkmark}><BiCheckbox strokeWidth={2} width={24} height={24}/></p></label>
            </div>
            <div className={styles["task-group"]}>
                <button 
                className="btn" 
                aria-label={`update ${task.name}Task`} 
                // onClick={}
                >
                    
                <BiEdit/>
                </button>

                <button 
                className="btn" 
                aria-label={`update ${task.name}Task`} 
                // onClick={}
                >
                    
                <MdDelete/>
                </button>

                
            </div>
        </li>
    )
}

export default TaskItems