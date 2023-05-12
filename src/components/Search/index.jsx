import { CreateButton } from '../CreateButton';
import { Input } from '../Input';

import styles from './styles.module.css';

export function Search() {
  return (
    <div className={styles.search}>
      <Input />
      <CreateButton />
    </div>
  );
}
