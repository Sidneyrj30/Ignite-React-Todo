import { useState } from "react"
import { Header } from "./components/Header"
import { ListTasks } from "./components/ListTasks"
import { NewTask } from "./components/NewTask"
import './global.css'

function App() {
  const [tasks, setTasks] = useState(
    [ 
      {id:1,content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet aspernatur cupiditate, eos ea fugit",done: false}, 
      {id:2,content:"Vitae est voluptates rerum reprehenderit atque. Tempora, earum",done: false}, 
      {id:3,content:"Facere placeat ea commodi debitis qui optio dolor. Autem",done: false}, 
      {id:4,content:"Accusantium voluptas, obcaecati ex id laborum cupiditate, eos ea fugit, recusandae blanditiis quibusdam facere itaque corrupti mollitia maxime similique!",done: false}
    ]
  )

  function addTask(content: string) {
    const id = Math.floor(Math.random() * 1000000) + 3
    const done = false;
    const newTask = {id, content, done}

    setTasks([...tasks, newTask])
    console.log(tasks);
  }

  function deleteTask(id: number) {
    const tasksWithoutDeletedOne = tasks.filter(task =>{
      return task.id !== id;
    })
  
    setTasks(tasksWithoutDeletedOne);
  }

  function toggleTask(id: number) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task))
  }

  return (
    <div>
      <Header />
      <NewTask addTask={addTask} />
      <ListTasks onDeleteTask={deleteTask} tasks={tasks} onToggle={toggleTask} />
    </div>
  )
}

export default App
