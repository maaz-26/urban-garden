// TaskForm.jsx
import React, { useState } from 'react';
import api from '../api';

const TaskForm = ({ fetchTasks }) => {
  const [form, setForm] = useState({
    task: '',
    description: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/tasks', form);
      setForm({ task: '', description: '', date: '' });
      fetchTasks(); // Refresh the task list after adding a new task
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        name="task"
        value={form.task}
        onChange={handleChange}
        placeholder="Task"
        required
      />
      <br />
      <input
        type="text"
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <br />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        placeholder="Date"
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TaskForm;
