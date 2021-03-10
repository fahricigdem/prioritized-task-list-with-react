import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { TaskContext } from './TaskContext'

const Navbar = () => {
    //Get data for Navbar "All Button" for the numbers of all Tasks and "Done Badge" for the number of completed Tasks
    const { value1 } = React.useContext(TaskContext);
    const [tasks] = value1

    //Calculate the number of completed Tasks
    let completed = 0
    tasks.map(task => { task.completed && completed++; return task })

    //In Navbar there are 3 object : Home Link, All Button, Done Badge (has no Link)
    return (
        <nav className="navBar">
            <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <h1 className="navButton navHome">Home</h1></Link>

            <Link to="/prioritized-task-list-with-react/5" style={{ textDecoration: 'none' }} >
                <h5 className="navButton">All: {tasks.length}</h5></Link>

            {completed ? <div className="badge badge-danger">Done : {completed} </div> : <div className="badge badge-info">Done : {completed} </div>}
        </nav>
    )
}

export default Navbar