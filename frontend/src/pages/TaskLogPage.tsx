import React, { useEffect, useState } from 'react';
import TaskLog from '../components/TaskLog';

const TaskLogPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fetch task logs from the backend
    fetch('/api/task-logs')
      .then(response => response.json())
      .then(data => setLogs(data));
  }, []);

  return (
    <div>
      <h1>Task Log</h1>
      <TaskLog logs={logs} />
    </div>
  );
};

export default TaskLogPage;
