import React, { useState, useEffect, useContext } from 'react';
import './HomePage.css'
import { Link } from 'react-router-dom';
import { TaskContext } from './TaskContext'



function HomePage() {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1

    let UrgentImp = 0
    let notUrgentImp = 0
    let UrgentNotImp = 0
    let notUrgentNotImp = 0

    tasks.map(task => {
        task.categorie == 1 && UrgentImp++
        task.categorie == 2 && notUrgentImp++
        task.categorie == 3 && UrgentNotImp++
        task.categorie == 4 && notUrgentNotImp++
        return (task)
    })

    return (
        <div className="HomePage">

            <div className="TaskGroupRow">

                <Link to="/prioritized-task-list-with-react/1" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <div className="TaskGroup UrgentImp" >
                        <h5>Urgent & Important</h5>
                        <h4><span className="badge rounded-pill bg-secondary">{UrgentImp}</span></h4>
                    </div>
                </Link>

                <Link to="/prioritized-task-list-with-react/2" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <div className="TaskGroup notUrgentImp">
                        <h5>Important</h5>
                        <h4><span className="badge rounded-pill bg-secondary">{notUrgentImp}</span></h4>
                    </div>
                </Link>

            </div>



            <Link to="/prioritized-task-list-with-react/new-task" style={{ textDecoration: 'none' }}>
                <div className="AddHome"><h1> + </h1></div>
            </Link>


            <div className="TaskGroupRow">

                <Link to="/prioritized-task-list-with-react/3" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <div className="TaskGroup UrgentNotImp">
                        <h5>Urgent</h5>
                        <h4><span className="badge rounded-pill bg-secondary">{UrgentNotImp}</span></h4>
                    </div>
                </Link>

                <Link to="/prioritized-task-list-with-react/4" style={{ textDecoration: 'none', color: "whitesmoke" }} >
                    <div className="TaskGroup notUrgentNotImp">
                        <h5>others</h5>
                        <h4><span className="badge rounded-pill bg-secondary">{notUrgentNotImp}</span></h4>
                    </div>
                </Link>

            </div>

        </div>
    );
}

export default HomePage;