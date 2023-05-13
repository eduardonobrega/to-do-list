import styles from './styles.module.css';

import { Trash } from '@phosphor-icons/react';

export function DeleteButton({ taskText, onDeleteTask }) {
  function handleDeleteTask() {
    onDeleteTask(taskText)
  }

  return (
    <button className={styles.button} onClick={handleDeleteTask}>
      <Trash weight="bold" />
    </button>
  );
}
