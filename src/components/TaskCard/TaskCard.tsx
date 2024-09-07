// import { Reorder } from 'framer-motion'
import styles from './TaskCard.module.css'

interface taskCardProps {
  id: number
  title: string
  desc: string
}

export const TaskCard = ({ id, title, desc }: taskCardProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

