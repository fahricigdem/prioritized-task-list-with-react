import React from 'react';

import { Link } from 'react-router-dom'

const TaskListLink = ({ listNu, listName, title, numOfEl }) => {
    //Task List linkbuttons are genereted for Homepage

    return (

        <Link to={`/prioritized-task-list-with-react/${listNu}`} style={{ textDecoration: 'none', color: "whitesmoke" }} >
            <div className={`TaskGroup ${listName}`} >
                <h5>{title}</h5>
                {numOfEl ? <h4><span className="badge rounded-pill bg-danger">{numOfEl}</span></h4> : ""}
            </div>
        </Link>

    )
}

export default TaskListLink

