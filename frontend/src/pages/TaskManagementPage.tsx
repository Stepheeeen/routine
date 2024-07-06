import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';

const TaskManagementPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    fetch('/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const handleEdit = (id: string) => {
    // Redirect to edit form
    window.location.href = `/task-form/${id}`;
  };

  const handleDelete = (id: string) => {
    fetch(`/api/tasks/${id}`, { method: 'DELETE' })
    .then(() => setTasks(tasks.filter((task) => task.id !== id)));
  };

  return (
    <div>
      <h1>Task Management</h1>
      <button onClick={() => window.location.href = '/task-form'}>Create New Task</button>
      <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default TaskManagementPage;
