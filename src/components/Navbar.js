import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskContext'




const Navbar = () => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1


    return (
        <nav className="navBar">
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 style={{ width: "130px", border: "1px solid #aaaaaa", padding: "10px" }}>Home</h1>
            </Link>
            <div className="badge badge-warning">{tasks.length}</div>
        </nav>
    )
}

export default Navbar