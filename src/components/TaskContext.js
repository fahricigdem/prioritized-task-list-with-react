import React, { useState, createContext } from 'react';

export const TaskContext = createContext()

export const TaskProvider = (props) => {

    const [tasks, setTasks] = useState([])
    const [lastId, setLastId] = useState(10000)

    return (
        <TaskContext.Provider value={{ value1: [tasks, setTasks], value2: [lastId, setLastId] }}>
            {props.children}
        </TaskContext.Provider>
    )

}

