import styles from './Task.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

interface Task{
    id:number,
    content: string,
    done: boolean
}

interface TaskProps{
    task:Task,
    onDeleteTask:(id: number) => void
    onToggle:(id: number) => void
}

export function Task({task, onDeleteTask, onToggle}: TaskProps) {   

    return (
        <div className={styles.task}>
            <button className={styles.checkbox} onClick={() => onToggle(task.id)}>
                { task.done ? 
                    <CheckCircle size={22} weight="fill" className={styles.checkCircle} /> :
                    <Circle size={22} className={styles.circle} />
                }
            </button>
            <label className={ task.done ? styles.done : styles.label} >
                {task.content}
            </label>
            <button className={styles.trash} type="submit" onClick={() => onDeleteTask(task.id)}>
                <Trash />
            </button>
        </div>
    )
}
