import styles from './styles.module.css';

import { Trash } from '@phosphor-icons/react';

export function DeleteButton() {
  return (
    <button className={styles.button}>
      <Trash weight="bold" />
    </button>
  );
}
