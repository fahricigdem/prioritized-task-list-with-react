import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskContext'




const Navbar = () => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    let completed = 0
    tasks.map(task => {
        if (task.completed) {
            completed++
        }

        return task
    }

    )


    return (
        <nav className="navBar">
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 className="btn btn-info">Home</h1>
            </Link>


            <div className="badge badge-warning">Total Tasks: {tasks.length}</div>
            <div className="badge badge-danger">Total Done: {completed} </div>

        </nav>
    )
}

export default Navbar