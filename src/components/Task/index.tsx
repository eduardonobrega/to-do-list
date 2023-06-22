import { Checkbox } from '../Checkbox'
import { DeleteButton } from '../DeleteButton'
import styles from './styles.module.css'

export interface TaskType {
  content: string
  completed: boolean
}

interface TaskProps {
  task: TaskType
  onDeleteTask: (taskDeleted: string) => void
  onChangeTaskStatus: (taskChanged: string) => void
}

export function Task({ task, onChangeTaskStatus, onDeleteTask }: TaskProps) {
  function handleChangeTaskStatus() {
    onChangeTaskStatus(task.content)
  }
  function handleDeleteTask() {
    onDeleteTask(task.content)
  }
  return (
    <li className={styles.task}>
      <Checkbox checked={task.completed} onChange={handleChangeTaskStatus} />
      <p>{task.content}</p>
      <DeleteButton onClick={handleDeleteTask} />
    </li>
  )
}
