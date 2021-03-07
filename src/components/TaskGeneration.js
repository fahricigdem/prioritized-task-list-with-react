import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from './TaskContext'

const TaskGeneration = ({ cat }) => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    const handleCompleted = (id) => {

        setTasks(
            [...tasks].map(task => {
                if (task.id == id) {

                    task.completed = !task.completed

                }
                return task

            })
        )

    }

    const handleDelete = (id) => {

        setTasks(
            [...tasks].filter(task => task.id != id)
        )


    }

    const data = tasks.map(task => {

        if (task.categorie === cat) {
            let style
            style = task.completed && "checked"

            return (
                <div className="taskrow">
                    <li
                        key={task.id}
                        className={style}
                        onClick={() => handleCompleted(task.id)}
                    >

                        {task.title} {task.id}
                    </li>

                    <h5 onClick={() => handleDelete(task.id)} className="deleteTask" >D E L E T E</h5>

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