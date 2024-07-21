import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTasks, TaskProvider } from '../context/TaskContext';
import PageContainer from './Index';

// Task Form Component
const TaskForm = ({ title = '', description = '', onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskTitle, taskDescription);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div>
        <label className="block">Title </label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="border-none outline-none p-2 w-full"
          placeholder="Enter task title"
          required
        />
      </div>
      <div className="mt-4">
        <label className="block">Description</label>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="border-none outline-none p-2 w-full"
          placeholder="Enter task description"
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Save Task
      </button>
    </form>
  );
};

// Task Page Component
const TaskPage = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleCreateTask = (title, description) => {
    addTask({ id: uuidv4(), title, description });
    setShowForm(false);
  };

  const handleEditTask = (title, description) => {
    if (editTask) {
      updateTask({ ...editTask, title, description });
      setEditTask(null);
    }
  };

  return (
    <PageContainer>
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task Scheduler</h1>
      <button
        onClick={() => {
          setEditTask(null);
          setShowForm(true);
        }}
        className="text-blue-500 mb-4 block"
      >
        Create New Task
      </button>
      {showForm && (
        <TaskForm
          title={editTask ? editTask.title : ''}
          description={editTask ? editTask.description : ''}
          onSubmit={editTask ? handleEditTask : handleCreateTask}
        />
      )}
      <ul className="space-y-4 mt-4">
        {tasks.length === 0 ? (
          <p>No tasks available. Create one to get started!</p>
        ) : (
          tasks.map(task => (
            <li key={task.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p>{task.description}</p>
              <button 
                onClick={() => {
                  setEditTask(task);
                  setShowForm(true);
                }}
                className="mt-2 text-yellow-500"
              >
                Edit
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="mt-2 text-red-500"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
    </PageContainer>
  );
};

const TaskPageWithProvider = () => (
  <TaskProvider>
    <TaskPage />
  </TaskProvider>
);

export default TaskPageWithProvider;
