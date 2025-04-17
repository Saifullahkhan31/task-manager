// src/components/AddTask.js
import React, { useState, useContext } from 'react';
import { addTask } from '../../task-manager/src/api';
import { AuthContext } from '../context/AuthContext';

const AddTask = () => {
  const { token } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate };
    await addTask(newTask, token);
    // Optionally reset the form or update the task list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;