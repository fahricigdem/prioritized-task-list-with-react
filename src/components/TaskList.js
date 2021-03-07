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

    return (
        <div className="container">



            {categorie == 1 ? <h1 style={{ color: "#d8c292" }}>Urgent & Important</h1> :
                categorie == 2 ? <h1 style={{ color: "#d8c292" }}>Important</h1> :
                    categorie == 3 ? <h1 style={{ color: "#d8c292" }}>Urgent</h1> : <h1 style={{ color: "#d8c292" }}>others</h1>}


            <TaskGeneration cat={categorie} />
            <br />
            <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <button className="btn btn-danger">Add New</button>
            </Link>
            <br />
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 className="btn btn-info">Home</h1>
            </Link>

            <div className="categorieLinks">
                <Link to="/prioritized-task-list-with-react/1" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <h5 style={{ backgroundColor: "#99CC00", padding: "15px", minWidth: "150px" }}>Urgent & Important > {UrgentImp}</h5>
                </Link>
                <Link to="/prioritized-task-list-with-react/2" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <h5 style={{ backgroundColor: "#36A4DD", padding: "15px", minWidth: "150px" }}>Important > {notUrgentImp}</h5>
                </Link>
                <Link to="/prioritized-task-list-with-react/3" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <h5 style={{ backgroundColor: "#FF9F00", padding: "15px", minWidth: "150px" }}>Urgent > {UrgentNotImp}</h5>
                </Link>
                <Link to="/prioritized-task-list-with-react/4" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <h5 style={{ backgroundColor: "#FF4D4E", padding: "15px", minWidth: "150px", hover: { backgroundColor: "yellow" } }}>others > {notUrgentNotImp}</h5>
                </Link>
            </div>




        </div>
    )
}

export default TaskList