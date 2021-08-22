import Header from './compenents/Header';
import Tasks from './compenents/Tasks';
import AddTask from './compenents/AddTask';
import { useState } from 'react';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const maincontainer = {
    width: "80%",
    border: 'solid 2px #0378A2',
    margin: '10%',
    padding:'5%',
    borderRadius: '4px',
  }
  const [tasks, setTasks] = useState(
    [
        {
            id: 1, 
            text: 'Aller au Cinéma',
            day: '5 Fevrier à 14:00',
            reminder: true,
        },
        {
            id: 2, 
            text: 'Vaccination Hopital Militaire', 
            day: '6 Fevrier à 13:30',
            reminder: true, 
        },
        {
            id: 3, 
            text: 'Food Shopping', 
            day: '7 Fevrier à 15:00', 
            reminder: false, 
        }
    ]
  ) 

  // Add a Task: 

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task : 
  const deleteTask = (id) => {
   //  console.log('Delete Attempt', id);
   setTasks(tasks.filter((task) => task.id !== id))
  }
  // Deactivate or Activate Reminder 
  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
         task.id === id ? {
           ...task, reminder : !task.reminder} : task
           )
        )
  }
 //   console.log("Reminder Double Clicked", id);

  return (
    <div className="App">
      <div style={maincontainer}>
      <Header user="Hafeed" school="epita" onAdd= {() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onToggle}/> : 'There are no tasks'}
      </div>
    </div>
  );
}

export default App;
