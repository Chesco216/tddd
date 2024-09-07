import { TaskCard } from "../TaskCard/TaskCard"
import { tasks } from "../../assets/tasks"
import styles from './TaskGrid.module.css'
// import { Reorder } from "framer-motion"
// import { useState } from "react"

export const TaskGrid = () => {

  // const [items, setItems] = useState(tasks)

  return (
    <div className={styles.container}>
      <div className={styles.todo}>
        <h2 className={styles.cardsTitle}>To Do</h2>
        {
          tasks.map( task => 
            <TaskCard key={task.id} id={task.id} title={task.title} desc={task.desc} />
          )
        }
      </div>
      <div className={styles.todo}>
        <h2 className={styles.cardsTitle}>Doing</h2>
        {
          tasks.map( task => 
            <TaskCard id={task.id} title={task.title} desc={task.desc} />
          )
        }
      </div>
      {/* TODO: add containers for done and doing*/}
    </div>
  )
}

