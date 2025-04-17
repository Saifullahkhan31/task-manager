// src/App.js
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';

function App() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <TaskList />
        <AddTaskButton />
      </main>
    </div>
  );
}

export default App;