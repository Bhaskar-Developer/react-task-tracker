import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import './index.css'

function App() {
  const [addTaskForm, setAddTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Walk the Dog.',
        day: 'Aug 30th at 5:30pm',
        reminder: false
    },
    {
        id: 2,
        text: 'Take out the trash.',
        day: 'Sept 20th at 6:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Order beer for the party.',
        day: 'Sept 16th at 4:30pm',
        reminder: true
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Add New Task
  const addTask = (task) => {
    setTasks([ ...tasks, { ...task, id: tasks.length + 1 } ])
  }

  // Show or Remove Add task Form
  const addButton = () => {
    setAddTaskForm(!addTaskForm)
  }

  return (
    <div className="container">
      <Header addButton={addButton} addTaskState={addTaskForm}  />
      { addTaskForm && <AddTask addTask={addTask} /> }
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={toggleReminder} />) : (<h3 style={{ margin: '20px' }} >No Tasks to Show</h3>) }
    </div>
  );
}

export default App;
