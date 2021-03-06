import React, { useState, createContext } from 'react';

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "tu was zu tun",
            text: "",
            categorie: 1,
            completed: true
        },
        {
            id: 2,
            title: "waschen",
            text: "",
            categorie: 1,
            completed: false
        },
        {
            id: 3,
            title: "schlafen",
            text: "",
            categorie: 2,
            completed: true
        },
        {
            id: 4,
            title: "lernen",
            text: "",
            categorie: 2,
            completed: false
        },
        {
            id: 5,
            title: "sport machen",
            text: "",
            categorie: 3,
            completed: true
        },
        {
            id: 6,
            title: "reinigen",
            text: "",
            categorie: 3,
            completed: false
        },
        {
            id: 7,
            title: "aufräumen",
            text: "",
            categorie: 4,
            completed: true
        },
        {
            id: 8,
            title: "faulenzen",
            text: "",
            categorie: 4,
            completed: false
        }
    ])
    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )

}

