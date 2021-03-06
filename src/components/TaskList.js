import React, { Component } from 'react';
import './TaskList.css';

const TaskList = () => {
    return (
        <div className="container">

            <div id="myDIV" class="header">
                <h2>Task List</h2>
                <input type="text" id="myInput" placeholder="Title..." />
                <span onclick="newElement()" class="addBtn">Add</span>
            </div>

            <ul id="myUL">
                <li>Hit the gym</li>
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
            </ul>


        </div>
    )
}

export default TaskList