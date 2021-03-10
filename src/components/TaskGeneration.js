import React, { useContext } from 'react';
import { TaskContext } from './TaskContext'

const TaskGeneration = ({ cat }) => {
    //Get data from Context 
    const { value1 } = useContext(TaskContext);
    const [tasks, setTasks] = value1

    const handleDetail = (id) => {
        //The detail (boolean) is changed.
        setTasks(
            [...tasks].map(task => {
                if (task.id === id) {
                    task.detail = !task.detail
                }
                return task
            })
        )
    }
    const handleCompleted = (id) => {
        //Clicking on a task (li tag) in the task list will change its completed info.
        setTasks(
            [...tasks].map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
            })
        )
    }

    const handleDelete = (id) => {
        //Clicking on a "x" button will filter tasks-object-array.
        setTasks(
            [...tasks].filter(task => task.id !== id)
        )
    }

    const data = tasks.map(task => {
        //A task list is created inside the ul tag.

        if (task.categorie === cat || cat === 5) {
            //cat variable is obtained as props from TaskList Component
            //Tasks with the relevant category value are generated for 'data object'
            let style
            style = task.completed && "checked"   // If the checked value of the related task is true, the style is changed.

            // There are li tag and 2 buttons inside the taskrow, "..." and "x"
            // If detailed information is available, "..." is shown next to the task name. 
            // If the detail value of the object is true, the detail is shown below.
            return (
                <div className="taskrow">
                    <li
                        key={task.id}
                        className={style}
                        onClick={() => handleCompleted(task.id)}
                    >
                        {task.title}
                        {task.text && <span style={{ color: "#fff", fontSize: "calc(7px + 2vmin)" }}> ...</span>}
                        {task.detail && <p style={{ color: "#c8c6a7", fontSize: "calc(7px + 2vmin)" }}>{task.text}</p>}

                    </li>
                    <p onClick={() => handleDetail(task.id)} className="formButton " style={{ minWidth: "3vw", padding: '1vw', margin: "1vh", backgroundColor: "#f0c929", color: "whitesmoke" }} > ...  </p>
                    <p onClick={() => handleDelete(task.id)} className="formButton " style={{ minWidth: "3vw", padding: '1vw', margin: "1vh", backgroundColor: "#ec5858", color: "whitesmoke" }} > x  </p>

                </div>
            )
        }
    })

    return (
        <ul id="myUL">
            { data}
        </ul>
    )
}

export default TaskGeneration