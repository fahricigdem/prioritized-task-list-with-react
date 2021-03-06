import React, { useContext } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskContext'




const Navbar = () => {

    const [tasks, setTasks] = useContext(TaskContext)

    return (
        <nav className="navBar">
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 style={{ width: "15vw" }}>Home</h1>
            </Link>
            <div className="badge badge-warning">{tasks.length}</div>
        </nav>
    )
}

export default Navbar