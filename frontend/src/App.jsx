import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskManagementPage from './pages/TaskManagementPage';
import TaskFormPage from './pages/TaskFormPage';
import TaskLogPage from './pages/TaskLogPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/tasks" component={TaskManagementPage} />
        <Route path="/task-form" component={TaskFormPage} />
        <Route path="/logs" component={TaskLogPage} />
      </Routes>
    </Router>
  );
};

export default App;
