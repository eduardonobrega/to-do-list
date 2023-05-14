import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

import { TaskType } from '../Task';

interface CheckboxProps {
  task: TaskType;
  onChangeTaskStatus: (task: TaskType) => void;
}

export function Checkbox({ task, onChangeTaskStatus }: CheckboxProps) {
  const checkbox = useRef<HTMLInputElement>(null);

  function handleChangeTaskStatus() {
    onChangeTaskStatus(task);
  }

  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.checked = task.completed;
    }
  }, []);

  return (
    <input
      type="checkbox"
      ref={checkbox}
      className={styles.checkbox}
      onChange={handleChangeTaskStatus}
    />
  );
}
