import React, { useContext } from 'react';
import { TaskContext } from './TaskContext'

const TaskGeneration = ({ cat }) => {

    const { value1 } = useContext(TaskContext);
    const [tasks, setTasks] = value1

    const handleCompleted = (id) => {

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
        setTasks(
            [...tasks].filter(task => task.id !== id)
        )
    }

    const data = tasks.map(task => {

        if (task.categorie === cat || cat === 5) {
            let style
            style = task.completed && "checked"

            return (
                <div className="taskrow">
                    <li
                        key={task.id}
                        className={style}
                        onClick={() => handleCompleted(task.id)}
                    >
                        {task.title}
                    </li>

                    <p onClick={() => handleDelete(task.id)} className="formButton" style={{ minWidth: "3vw", padding: '1vw', backgroundColor: "#ec5858", color: "whitesmoke" }} > del  </p>

                </div>
            )
        }
    }
    )

    return (
        <ul id="myUL">
            { data}
        </ul>
    )
}

export default TaskGeneration