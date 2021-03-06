import React, { useState, useEffect } from 'react';
import './NewTask.css';


const NewTask = () => {

    return (
        <div className="formContainer" style={{ minHeight: '100vh' }} >

            <form className="newTaskForm" > {/*onSubmit={onSubmit} */}
                <input
                    className="newTaskInput"
                    type="text"
                    name="newTaskName"
                    // value={newTaskName}
                    placeholder="New Task"
                    // onChange={onChange}
                    required
                />

                <input
                    type="checkbox"
                    name="isUrgent"
                    id="c1"
                // checked={isImportant}
                // onChange={onChange}
                /> <label for="c1"><span></span>Urgent</label>


                <input
                    type="checkbox"
                    name="isUrgent"
                    id="c2"
                // checked={isImportant}
                // onChange={onChange}
                /> <label for="c2"><span></span>Important</label>

                <textarea
                    className="newTaskDetail"
                    name="newTaskDetail"
                    id="taskDetail"
                    // value={newTaskDetail}
                    cols="24"
                    rows="4"
                    placeholder="New Task Detail"
                // onChange={onChange}
                />
                <br />
                <button className="btn btn-danger">Add</button>



            </form>
        </div>

    )
}

export default NewTask