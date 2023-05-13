import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

export function Task({ task, onDeleteTask, onChangeTaskStatus }) {
  return (
    <li className={styles.task}>
      <Checkbox task={task} onChangeTaskStatus={onChangeTaskStatus} />
      <p>{task.content}</p>
      <DeleteButton taskText={task.content} onDeleteTask={onDeleteTask} />
    </li>
  );
}
