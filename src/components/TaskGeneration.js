import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from './TaskContext'

const TaskGeneration = ({ cat }) => {

    const [tasks, setTasks] = useContext(TaskContext)

    const data = tasks.map(task => {

        if (task.categorie === cat) {

            return (

                <li key={task.id}>{task.title}</li>
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