import React, { Component } from 'react';

// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'

import { TaskProvider } from "./components/TaskContext"

function App() {
  return (
    <TaskProvider>
      <Router>


        <div>
          <Navbar />
          <Switch>

            <Route path="/prioritized-task-list-with-react/" exact component={HomePage} />
            <Route path="/prioritized-task-list-with-react/:cat" component={TaskList} />
            <Route path="/prioritized-task-list-with-react/new-task" component={NewTask} />

          </Switch>
        </div>


      </Router>
    </TaskProvider>

  );
}

export default App;
