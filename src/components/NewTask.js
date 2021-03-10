import React, { useState, useEffect, useContext } from 'react';
import './NewTask.css';
import { TaskContext } from './TaskContext' // Data Source
import TaskListLinkButtons from "./TaskListLinkButtons" // Tasklist Buttons (for New Task Component)

const NewTask = () => {
    //Includes a form to add a new task and link buttons for task lists

    //Get "tasks" data and last ID data for unique id from Context Component
    const { value1, value2 } = useContext(TaskContext);
    const [tasks, setTasks] = value1
    const [lastId, setLastId] = value2

    //Task Title, Task Text(detail) and categorie data
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [categorie, setCategorie] = useState(null)

    //For determining categorie of a task
    const [isUrgent, setIsUrgent] = useState(false)
    const [isImportant, setIsImportant] = useState(false)

    //When the Important or Urgent button is clicked, they change to a different color.
    let buttonStyleUrgent = isUrgent ? "formButton  urgent " : "formButton "
    let buttonStyleImportant = isImportant ? "formButton  important" : "formButton "

    const handleIsUrgent = () => {
        //When the Urgent button is clicked, the isUrgent variable is updated.
        setIsUrgent(!isUrgent)
    }

    const handleIsImportant = () => {
        //When the Important button is clicked, the isImportant variable is updated.
        setIsImportant(!isImportant)
    }

    useEffect(() => {
        // When the isUrgent and isImportant variables are updated, the category of the task is determined 
        // Categorie 1 is Urgent&Important, 2 is not Urgent but Important, and so on...
        isUrgent && isImportant ? setCategorie(1) :
            !isUrgent && isImportant ? setCategorie(2) :
                isUrgent && !isImportant ? setCategorie(3) : setCategorie(4)
    }, [isUrgent, isImportant])

    const handleTitle = (e) => {
        //Title of new Task
        setTitle(e.target.value)
    }

    const handleText = (e) => {
        //Detail Text of new Task
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
            detail: false  // It becomes true with the "..." button in the task list and detailed information is displayed.
        }]

        setTasks(newTasks)

        setLastId(lastId + 1) //For unique id, the lastID in the context component is updated
        //Resets all input fields in new Task Form
        setTitle("")
        setText("")
        setIsUrgent(false)
        setIsImportant(false)
    }

    // includes a new Task Form and Task List links for 4 categorie
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

                <div className={buttonStyleUrgent} onClick={handleIsUrgent} style={{ borderStyle: "dashed", borderColor: "#FF9F00" }}>Urgent</div>

                <div className={buttonStyleImportant} onClick={handleIsImportant} style={{ borderStyle: "dashed", borderColor: "#36A4DD" }}>Important</div><br />

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