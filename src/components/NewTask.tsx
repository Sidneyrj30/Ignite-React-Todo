import { FormEvent, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import plus from '../assets/plus.svg';
import styles from"./NewTask.module.css";
import 'react-toastify/dist/ReactToastify.css';

interface NewTaskProps{
  addTask: (task: string) => void
}

export function NewTask({addTask}: NewTaskProps) {
    
  const [newTask, setNewTask] = useState('');

    function handleAddTask(e: FormEvent) {
        e.preventDefault()

        if (!newTask) {
            toast.error("Por favor, Adicione uma tarefa.", {
                theme: "colored"
            });
            return;
        }

        addTask(newTask);

        setNewTask('');
    }

    return (
        <form className={styles.newTask} onSubmit={handleAddTask}>
            <input 
                placeholder="Adicione uma nova tarefa"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}    
            />
            <button type='submit' className={styles.btnAddTask}>
                Criar
                <img src={plus} alt="Adicionar" />
            </button>
            <ToastContainer />
        </form>
    )
}
