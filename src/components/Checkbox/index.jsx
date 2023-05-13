import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export function Checkbox({ task, onChangeTaskStatus }) {
  const checkbox = useRef(null);
  function handleChangeTaskStatus() {
    onChangeTaskStatus(task);
  }

  useEffect(() => {
    if (task.completed) {
      checkbox.current.checked = true;
    } else {
      checkbox.current.checked = false;
    }
  }, []);
  
  return (
    <input
      type="checkbox"
      name=""
      id=""
      ref={checkbox}
      className={styles.checkbox}
      onChange={handleChangeTaskStatus}
    />
  );
}
