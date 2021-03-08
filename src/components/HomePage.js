import React, { useContext } from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext'
import TaskListLink from "./TaskListLink"

const HomePage = () => {

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
        <div className="HomePage">

            <div className="TaskGroupRow">
                <TaskListLink listNu="1" listName="UrgentImp" title="Urgent & Important" numOfEl={UrgentImp} />
                <TaskListLink listNu="2" listName="notUrgentImp" title="Important" numOfEl={notUrgentImp} />
            </div>

            <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none' }}>
                <div className="AddHome"><h1> + </h1></div>
            </Link>

            <div className="TaskGroupRow">
                <TaskListLink listNu="3" listName="UrgentNotImp" title="Urgent" numOfEl={UrgentNotImp} />
                <TaskListLink listNu="4" listName="notUrgentNotImp" title="others" numOfEl={notUrgentNotImp} />
            </div>
        </div>
    );
}

export default HomePage;