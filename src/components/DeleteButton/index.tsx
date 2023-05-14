import styles from './styles.module.css';

import { Trash } from '@phosphor-icons/react';

interface DeleteButtonProps {
  taskText: string;
  onDeleteTask: (task: string) => void;
}

export function DeleteButton({ taskText, onDeleteTask }: DeleteButtonProps) {
  function handleDeleteTask() {
    onDeleteTask(taskText);
  }

  return (
    <button className={styles.button} onClick={handleDeleteTask}>
      <Trash weight="bold" />
    </button>
  );
}
