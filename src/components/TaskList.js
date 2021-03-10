import React from 'react';
import './TaskList.css';
import TaskGeneration from './TaskGeneration' // Used for the production of Tasklist
import TaskListLinkButtons from "./TaskListLinkButtons" // Tasklist Buttons (for TaskList)
import { Link } from 'react-router-dom'

//match is used for determining the categorie 
const TaskList = ({ match }) => {

    let categorie = Number(match.params.cat)

    let style = { color: "#d8c292", fontSize: "calc(15px + 2vmin)" }

    //Tasklist title is written according to categorie
    //Tasklist is genereted with TaskGeneration component
    return (
        <div className="taskListContainer">

            {categorie === 1 ? <p style={style}>Urgent & Important</p> :
                categorie === 2 ? <p style={style}>Important</p> :
                    categorie === 3 ? <p style={style}>Urgent</p> :
                        categorie === 4 ? <p style={style}>Others</p> : <p style={style}>All Tasks</p>}

            <TaskGeneration cat={categorie} />

            <div className="buttonContainer">

                <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <button className="formButton" style={{ backgroundColor: "#54e346", color: "#aa3a3a" }}>Add</button>
                </Link>

                <TaskListLinkButtons />

            </div>

        </div>
    )
}

export default TaskList