import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.name} - {task.cron}
          <button onClick={() => onEdit(task.id)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
