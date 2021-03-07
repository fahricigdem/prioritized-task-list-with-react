import React from 'react';
import './TaskList.css';
import TaskGeneration from './TaskGeneration'
import { TaskContext } from './TaskContext'
import { Link } from 'react-router-dom'


const TaskList = ({ match }) => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    let categorie = Number(match.params.cat)

    let UrgentImp = 0
    let notUrgentImp = 0
    let UrgentNotImp = 0
    let notUrgentNotImp = 0

    tasks.map(task => {
        task.categorie == 1 && UrgentImp++
        task.categorie == 2 && notUrgentImp++
        task.categorie == 3 && UrgentNotImp++
        task.categorie == 4 && notUrgentNotImp++
        return (task)
    })

    let style = { color: "#d8c292", fontSize: "calc(15px + 2vmin)" }

    return (
        <div className="taskListContainer">

            <div>

                {categorie == 1 ? <p style={style}>Urgent & Important</p> :
                    categorie == 2 ? <p style={style}>Important</p> :
                        categorie == 3 ? <p style={style}>Urgent</p> : <p style={style}>others</p>}

                <TaskGeneration cat={categorie} />

            </div>
            <div className="buttonContainer">

                <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <button className="formButton" style={{ backgroundColor: "#54e346", color: "#aa3a3a" }}>Add</button>
                </Link>

                <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none' }}>
                    <div className="formButton" style={{ backgroundColor: "#aa3a3a", color: "#f8e4b7" }}>Home</div>
                </Link>

                <Link to="/prioritized-task-list-with-react/1" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#99CC00" }}>Urgent & Important : {UrgentImp}</div>
                </Link>

                <Link to="/prioritized-task-list-with-react/2" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#36A4DD" }}>Important :{notUrgentImp}</div>
                </Link>

                <Link to="/prioritized-task-list-with-react/3" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#FF9F00" }}>Urgent : {UrgentNotImp}</div>
                </Link>

                <Link to="/prioritized-task-list-with-react/4" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#FF4D4E" }}>others : {notUrgentNotImp}</div>
                </Link>

            </div>




        </div>
    )
}

export default TaskList