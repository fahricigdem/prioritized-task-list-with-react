import React, { useState, useEffect, useContext } from 'react';
import './NewTask.css';
import { TaskContext } from './TaskContext'
import { Link } from 'react-router-dom'


const NewTask = () => {

    const { value1, value2 } = React.useContext(TaskContext);
    const [tasks, setTasks] = value1
    const [lastId, setLastId] = value2

    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [categorie, setCategorie] = useState(null)

    const [isUrgent, setIsUrgent] = useState(false)
    const [isImportant, setIsImportant] = useState(false)


    // let buttonStyleUrgent = isUrgent ? "btn btn-secondary" : "btn btn-light"
    // let buttonStyleImportant = isImportant ? "btn btn-secondary" : "btn btn-light"

    let buttonStyleUrgent = isUrgent ? "formButton clicked " : "formButton"
    let buttonStyleImportant = isImportant ? "formButton clicked " : "formButton"

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
            completed: false
        }]

        setTasks(newTasks)

        setLastId(lastId + 1)

        setTitle("")
        setText("")
        setIsUrgent(false)
        setIsImportant(false)
    }

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

    console.log(tasks[tasks.length - 1])

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
                />
                <br />

                <div className={buttonStyleUrgent} onClick={handleIsUrgent}>Urgent</div>
                <br />
                <div className={buttonStyleImportant} onClick={handleIsImportant}>Important</div>


                <br />

                <textarea
                    className="newTaskDetail"
                    name="newTaskDetail"
                    id="taskDetail"
                    value={text}
                    cols="24"
                    rows="2"
                    placeholder="New Task details..."
                    onChange={handleText}
                />
                <br />

                <button className="formButton" style={{ backgroundColor: "#54e346", color: "#aa3a3a" }}>Add</button>

                <Link to="/prioritized-task-list-with-react/" style={{ textDecoration: 'none' }}>
                    <div className="formButton" style={{ backgroundColor: "#aa3a3a", color: "#f8e4b7" }}>Home</div>
                </Link>
            </form>
            <br />

            <div >
                <Link to="/prioritized-task-list-with-react/1" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#99CC00" }}>Urgent & Important : {UrgentImp}</div>
                </Link>
                <Link to="/prioritized-task-list-with-react/2" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#36A4DD" }}>Important :{notUrgentImp}</div>
                </Link>
                <br />
                <Link to="/prioritized-task-list-with-react/3" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#FF9F00" }}>Urgent : {UrgentNotImp}</div>
                </Link>
                <Link to="/prioritized-task-list-with-react/4" style={{ textDecoration: 'none' }} >
                    <div className="formButton link" style={{ backgroundColor: "#FF4D4E" }}>others : {notUrgentNotImp}</div>
                </Link>
            </div >

            <Link to="/prioritized-task-list-with-react/5" style={{ textDecoration: 'none' }} >
                <div className="badge badge-warning" style={{ minWidth: "45vw", minHeight: "10vh", paddingTop: "3.5vh", marginTop: "10px" }}>All : {tasks.length}</div>
            </Link>

        </div >

    )
}

export default NewTask