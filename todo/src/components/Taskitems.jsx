import React from "react";
import styles from "./TaskList.module.css"

function TaskItems({task}){
    return(
        <li className={styles.task}>
            <div className={styles["task-group"]}>
            {task.name}
            </div>
           
        </li>
    )
}

export default TaskItems