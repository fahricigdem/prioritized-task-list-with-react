import React, { useContext } from 'react';
import { TaskContext } from './TaskContext'
import { Link } from 'react-router-dom'

const TaskListLinkButtons = () => {
    //Task List linkbuttons are genereted for NewTask and Tasklist components

    const { value1 } = useContext(TaskContext);
    const [tasks] = value1

    let UrgentImp = 0
    let notUrgentImp = 0
    let UrgentNotImp = 0
    let notUrgentNotImp = 0

    tasks.map(task => {
        task.categorie === 1 && UrgentImp++
        task.categorie === 2 && notUrgentImp++
        task.categorie === 3 && UrgentNotImp++
        task.categorie === 4 && notUrgentNotImp++
        return (task)
    })

    return (

        <div className="buttonContainer">
            <Link to="/prioritized-task-list-with-react/1" style={{ textDecoration: 'none' }} >
                <div className="formButton link" style={{ backgroundColor: "#555", color: "#99CC00" }}>Urgent & <br /> Important : {UrgentImp}</div>
            </Link>
            <Link to="/prioritized-task-list-with-react/2" style={{ textDecoration: 'none' }} >
                <div className="formButton link" style={{ backgroundColor: "#555", color: "#36A4DD" }}>Important : {notUrgentImp}</div>
            </Link>
            <Link to="/prioritized-task-list-with-react/3" style={{ textDecoration: 'none' }} >
                <div className="formButton link" style={{ backgroundColor: "#555", color: "#FF9F00" }}>Urgent : {UrgentNotImp}</div>
            </Link>
            <Link to="/prioritized-task-list-with-react/4" style={{ textDecoration: 'none' }} >
                <div className="formButton link" style={{ backgroundColor: "#555", color: "#FF4D4E" }}>others : {notUrgentNotImp}</div>
            </Link>

        </div>
    )
}

export default TaskListLinkButtons