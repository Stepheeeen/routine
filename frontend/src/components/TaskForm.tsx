import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [cron, setCron] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, cron, isRecurring, nextRun: new Date() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        value={cron}
        onChange={(e) => setCron(e.target.value)}
        placeholder="Cron Expression"
        required
      />
      <label>
        Recurring:
        <input
          type="checkbox"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
        />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
