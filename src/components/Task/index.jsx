import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

export function Task({ taskText }) {
  return (
    <li className={styles.task}>
      <Checkbox />
      <p>{taskText}</p>
      <DeleteButton />
    </li>
  );
}
