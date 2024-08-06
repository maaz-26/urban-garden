import React, { useState, useEffect } from 'react';
import api from '../api';
import TaskForm from './TaskForm';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div>
      <TaskForm fetchTasks={fetchTasks} />
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.task} - {task.description} - {task.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
