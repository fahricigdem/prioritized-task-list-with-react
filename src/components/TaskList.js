import React, { useState, useEffect, useContext } from 'react';
import './TaskList.css';
import TaskGeneration from './TaskGeneration'
import { TaskContext } from './TaskContext'


const TaskList = ({ match }) => {
    const [tasks, setTasks] = useContext(TaskContext)

    return (
        <div className="container">

            <div id="myDIV" class="header">
                <h2>Task List</h2>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onclick="newElement()" class="addBtn">Add</span>
            </div>

            <TaskGeneration cat={Number(match.params.cat)} />

        </div>
    )
}

export default TaskList