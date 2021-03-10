import React, { useState, createContext, useEffect } from 'react';

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    //includes 2 data source : task objects and lastId (initial value is 10000)
    const [tasks, setTasks] = useState([])
    const [lastId, setLastId] = useState(10000)

    useEffect(() => {
        // Get updated data from local when first mounting
        getLocalInfo()
    }, [])

    useEffect(() => {
        //Local Data is updated as the task objects is updated.
        saveLocalInfo()
    }, [tasks])

    const saveLocalInfo = () => {
        // tasks and lastId is locally stored
        localStorage.setItem("tasks", JSON.stringify(tasks))
        localStorage.setItem("lastId", JSON.stringify(lastId))

    }

    const getLocalInfo = () => {
        // Get Local Data 
        if (localStorage.getItem("tasks") === null) {
            //Initial values are saved if local data is not yet available
            localStorage.setItem("tasks", JSON.stringify([]))
            localStorage.setItem("lastId", JSON.stringify(10000))

        } else {
            //If local data is available, get the data.
            let tasksLocal = JSON.parse(localStorage.getItem("tasks"))
            let lastIdLocal = JSON.parse(localStorage.getItem("lastId"))

            setTasks(tasksLocal)
            setLastId(lastIdLocal)
        }
    }

    // 2 different source "tasks" and "lastId" values are provided as value1 and value2
    return (
        <TaskContext.Provider value={{ value1: [tasks, setTasks], value2: [lastId, setLastId] }}>
            {props.children}
        </TaskContext.Provider>
    )

}

