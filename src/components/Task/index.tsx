import { Checkbox } from '../Checkbox';
import { DeleteButton } from '../DeleteButton';
import styles from './styles.module.css';

export function Task() {
  return (
    <li className={styles.task}>
      <Checkbox />
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <DeleteButton />
    </li>
  );
}
