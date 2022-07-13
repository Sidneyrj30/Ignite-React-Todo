import clipboard from '../assets/clipboard.svg'
import styles from './ListTasks.module.css'
import { Task } from './Task';

interface Task{
    id:number,
    content: string,
    done: boolean
}

interface ListTasksProps{
    tasks: Task[]
    onDeleteTask: (id: number) => void
    onToggle: (id: number) => void
}

export function ListTasks({tasks, onDeleteTask, onToggle}: ListTasksProps) { 
    const numberTasks = tasks.length
    const tasksDone = tasks.filter( task => task.done === true)

    return (
        <div className={styles.Content}>
            <header>
                <div className={styles.nameBlue}>
                    Tarefas criadas
                    <p className={styles.counter}>{numberTasks}</p>
                </div>
                <div className={styles.namePurple}>
                    Concluídas
                    <p className={styles.counter}>
                        { numberTasks === 0 ? 
                        `0`: `${tasksDone.length} de ${numberTasks}`
                        }                        
                    </p>
                </div>               
            </header>
            <main>
                { numberTasks > 0 ?
                    <div className={styles.list}>
                        {tasks.map( task =>(
                            <Task 
                                key={task.id} 
                                task={task} 
                                onDeleteTask={onDeleteTask}
                                onToggle={onToggle}
                            />
                        ))}
                    </div>
                    :
                    <div className={styles.emptyContent}>
                        <img src={clipboard} />
                        <div>
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                }
            </main>
        </div>
    )
}
