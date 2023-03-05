import React from "react";
import CustomForm from "./components/CustomForm";
import TaskList from "./components/TaskList";

function App(){
    const [tasks, setTasks] = React.useState([])

    const addTask =(task) =>{
        setTasks(function(prevState){
            return(
                [...prevState,task]
            )
        })
    }

    return(
        <div className="container">
            <header>
              <h1>My task list</h1>
            </header>
            <CustomForm addTask={addTask}/>
            {tasks && <TaskList tasks={tasks}/>}
        </div>
    )
}

export default App