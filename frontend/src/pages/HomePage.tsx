import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>System Statistics</p>
      <ul>
        <li>Scheduled Tasks: 10</li>
        <li>Executed Tasks: 5</li>
      </ul>
      <h2>Recent Activity</h2>
      <ul>
        <li>Task 1 executed at 2024-07-05 12:00</li>
        <li>Task 2 executed at 2024-07-05 13:00</li>
      </ul>
      <nav>
        <a href="/tasks">Manage Tasks</a>
        <a href="/logs">Task Logs</a>
      </nav>
    </div>
  );
};

export default HomePage;
