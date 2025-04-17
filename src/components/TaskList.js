// src/components/TaskList.js
import React, { useEffect, useState, useContext } from 'react';
import { fetchTasks } from '../../task-manager/src/api';
import { AuthContext } from '../context/AuthContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { token } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksData = await fetchTasks(token);
      setTasks(tasksData);
    };
    getTasks();
  }, [token]);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;