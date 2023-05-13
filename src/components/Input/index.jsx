import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

export function Input({ newTask, onNewTaskChange, setRef }) {
  const inputRef = useRef(null);

  function handleNewTaskInvalid(event) {
    event.target.setCustomValidity('Informe uma tarefa!');
  }

  function handleNewTaskChange(event) {
    event.target.setCustomValidity('');
    onNewTaskChange(event.target.value);
  }

  useEffect(() => {
    setRef(inputRef);
  }, [setRef]);

  return (
    <input
      type="text"
      placeholder="Adicione uma nova tarefa"
      value={newTask}
      onChange={handleNewTaskChange}
      onInvalid={handleNewTaskInvalid}
      className={styles.input}
      ref={inputRef}
      required
      autoFocus
    />
  );
}
