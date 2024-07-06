import React from 'react';
import TaskForm from '../components/TaskForm';

const TaskFormPage = () => {
  const handleSubmit = (task) => {
    fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    })
    .then(() => window.location.href = '/tasks');
  };

  return (
    <div>
      <h1>Create/Edit Task</h1>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default TaskFormPage;
