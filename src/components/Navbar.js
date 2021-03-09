import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskContext'

const Navbar = () => {

    const { value1 } = React.useContext(TaskContext);
    const [tasks] = value1

    let completed = 0
    tasks.map(task => { task.completed && completed++; return task })

    return (
        <nav className="navBar">
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 className="navButton navHome">Home</h1>
            </Link>

            <Link to="/prioritized-task-list-with-react/5" style={{ textDecoration: 'none' }} >
                <h1 className="navButton">All : {tasks.length}</h1>
            </Link>


            {completed ? <div className="badge badge-danger">Done : {completed} </div> : <div className="badge badge-info">Done : {completed} </div>}

        </nav>
    )
}

export default Navbar