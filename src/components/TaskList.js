import React from 'react';
import './TaskList.css';
import TaskGeneration from './TaskGeneration'
import { TaskContext } from './TaskContext'
import { Link } from 'react-router-dom'


const TaskList = ({ match }) => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    return (
        <div className="container">
            <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                <button className="btn btn-danger">Add New</button>
            </Link>
            <TaskGeneration cat={Number(match.params.cat)} />

        </div>
    )
}

export default TaskList