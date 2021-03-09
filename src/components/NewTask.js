import React, { useState, useEffect, useContext } from 'react';
import './NewTask.css';
import { TaskContext } from './TaskContext'
import TaskListLinkButtons from "./TaskListLinkButtons"

const NewTask = () => {

    const { value1, value2 } = useContext(TaskContext);
    const [tasks, setTasks] = value1
    const [lastId, setLastId] = value2

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [categorie, setCategorie] = useState(null)

    const [isUrgent, setIsUrgent] = useState(false)
    const [isImportant, setIsImportant] = useState(false)

    let buttonStyleUrgent = isUrgent ? "formButton  urgent " : "formButton "
    let buttonStyleImportant = isImportant ? "formButton   important" : "formButton "

    const handleIsUrgent = () => {
        setIsUrgent(!isUrgent)
    }

    const handleIsImportant = () => {
        setIsImportant(!isImportant)
    }

    useEffect(() => {
        isUrgent && isImportant ? setCategorie(1) :
            !isUrgent && isImportant ? setCategorie(2) :
                isUrgent && !isImportant ? setCategorie(3) : setCategorie(4)
    }, [isUrgent, isImportant])

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let newTasks = [...tasks, {
            id: lastId,
            title: title,
            text: text,
            categorie: categorie,
            completed: false,
            detail: false
        }]

        setTasks(newTasks)
        setLastId(lastId + 1)
        setTitle("")
        setText("details...")
        setIsUrgent(false)
        setIsImportant(false)
    }

    // console.log(tasks[tasks.length - 1])

    return (
        <div className="formContainer"  >

            <form onSubmit={handleSubmit}>

                <input
                    className="newTaskInput"
                    type="text"
                    name="title"
                    value={title}
                    placeholder="New Task Title"
                    onChange={handleTitle}
                    required
                /><br />

                <div className={buttonStyleUrgent} onClick={handleIsUrgent}>Urgent</div>

                <div className={buttonStyleImportant} onClick={handleIsImportant}>Important</div><br />

                <textarea
                    className="newTaskDetail"
                    name="newTaskDetail"
                    id="taskDetail"
                    value={text}
                    cols="24"
                    rows="2"
                    placeholder="Task details: ..."
                    onChange={handleText}
                /><br />

                <button className="formButton add">Add</button>

            </form><br />

            <TaskListLinkButtons />

        </div>
    )
}

export default NewTask