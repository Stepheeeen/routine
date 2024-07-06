import React from 'react';

const TaskLog = ({ logs }) => {
  return (
    <ul>
      {logs.map((log) => (
        <li key={log.id}>
          {log.name} - Executed at {log.executionTime} - {log.status}
        </li>
      ))}
    </ul>
  );
};

export default TaskLog;
