import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

export interface TaskType {
  content: string;
  completed: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: string) => void;
  onChangeTaskStatus: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask, onChangeTaskStatus }: TaskProps) {
  return (
    <li className={styles.task}>
      <Checkbox task={task} onChangeTaskStatus={onChangeTaskStatus} />
      <p>{task.content}</p>
      <DeleteButton taskText={task.content} onDeleteTask={onDeleteTask} />
    </li>
  );
}
