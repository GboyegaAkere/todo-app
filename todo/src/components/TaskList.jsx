import React from "react";
import TaskItems from "./Taskitems";
import styles from "./TaskList.module.css"

function TaskList({tasks}){
    return(
        <ul className={styles.tasks}>
            {tasks.sort((a,b)=>b.id-a.id).map((task)=>{
                return(
                    <TaskItems key={task.id} task={task}/>
                )
            })}
        </ul>
    )
}

export default TaskList