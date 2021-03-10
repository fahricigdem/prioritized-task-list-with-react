import React, { useContext } from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext' // Data Source
import TaskListLink from "./TaskListLink"  // Tasklist Buttons (for Homepage)

const HomePage = () => {

    // Get data from context
    const { value1 } = useContext(TaskContext);
    const [tasks] = value1

    //Calculate how many tasks in which category  
    let UrgentImp = 0
    let notUrgentImp = 0
    let UrgentNotImp = 0
    let notUrgentNotImp = 0

    // Nu.1 is for Urgent&Important, 2 for not Urgent but Important,3 for Urgen but not Important and 4 for neither Urgent nor Important).
    tasks.map(task => {
        task.categorie === 1 && UrgentImp++
        task.categorie === 2 && notUrgentImp++
        task.categorie === 3 && UrgentNotImp++
        task.categorie === 4 && notUrgentNotImp++
        return (task)
    })

    //Links to task categories and add button 
    //Total 5 button : 2 buttons at the top, 2 buttons at the bottom and "add button" in the middle
    return (
        <div className="HomePage">

            <div className="TaskGroupRow">
                <TaskListLink listNu="1" listName="UrgentImp" title="Urgent & Important" numOfEl={UrgentImp} />
                <TaskListLink listNu="2" listName="notUrgentImp" title="Important" numOfEl={notUrgentImp} /></div>

            <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none' }}>
                <div className="AddHome"><h1> + </h1></div></Link>

            <div className="TaskGroupRow">
                <TaskListLink listNu="3" listName="UrgentNotImp" title="Urgent" numOfEl={UrgentNotImp} />
                <TaskListLink listNu="4" listName="notUrgentNotImp" title="others" numOfEl={notUrgentNotImp} /></div>
        </div>
    );
}

export default HomePage;