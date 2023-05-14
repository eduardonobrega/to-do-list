import { useEffect, useRef, InvalidEvent, ChangeEvent, RefObject } from 'react';
import styles from './styles.module.css';

interface InputProps {
  newTask: string;
  onNewTaskChange: (newTask: string) => void;
  setRef: (ref: RefObject<HTMLInputElement>) => void;
}

export function Input({ newTask, onNewTaskChange, setRef }: InputProps) {
  const inputRef = useRef(null);

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Informe uma tarefa!');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
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
