import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from './TaskContext'

const TaskGeneration = ({ cat }) => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    const data = tasks.map(task => {

        if (task.categorie === cat) {

            return (

                <li key={task.id}>{task.title} {task.id}</li>
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