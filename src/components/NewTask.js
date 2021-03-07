import React, { useState, useEffect, useContext } from 'react';
import './NewTask.css';
import { TaskContext } from './TaskContext'
import { Link } from 'react-router-dom'


const NewTask = () => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1
    const [lastId, setLastId] = value2



    // const [id, setId] = useState()
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [categorie, setCategorie] = useState(null)
    const [completed, setCompleted] = useState(false)

    const [isUrgent, setIsUrgent] = useState(false)
    const [isImportant, setIsImportant] = useState(false)


    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }


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


    const handleSubmit = (e) => {
        e.preventDefault()

        let newTasks = [...tasks, {
            id: lastId,
            title: title,
            text: text,
            categorie: categorie,
            completed: completed
        }]

        setTasks(newTasks)

        setLastId(lastId + 1)

        setTitle("")
        setText("")
        setIsUrgent(false)
        setIsImportant(false)
    }

    console.log(tasks[tasks.length - 1])

    return (
        <div className="formContainer" style={{ minHeight: '100vh' }} >

            <form className="newTaskForm" onSubmit={handleSubmit}>
                <input
                    className="newTaskInput"
                    type="text"
                    name="title"
                    value={title}
                    placeholder="New Task Title"
                    onChange={handleTitle}
                    required
                />

                <input
                    type="checkbox"
                    name="isUrgent"
                    id="c1"
                    checked={isUrgent}
                    onChange={handleIsUrgent}
                /> <label for="c1"><span></span>Urgent</label>


                <input
                    type="checkbox"
                    name="isImportant"
                    id="c2"
                    checked={isImportant}
                    onChange={handleIsImportant}
                /> <label for="c2"><span></span>Important</label>

                <textarea
                    className="newTaskDetail"
                    name="newTaskDetail"
                    id="taskDetail"
                    value={text}
                    cols="24"
                    rows="4"
                    placeholder="New Task details..."
                    onChange={handleText}
                />
                <br />
                <button id="add" className="btn btn-danger">Add</button>
                <br />

                <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none', color: "whitesmoke" }}>
                    <h1 id="end" className="btn btn-warning">End</h1>
                </Link>



            </form>
        </div>

    )
}

export default NewTask