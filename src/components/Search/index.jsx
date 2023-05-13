import { useRef } from 'react';
import { CreateButton } from '../CreateButton';
import { Input } from '../Input';

import styles from './styles.module.css';

export function Search({ newTask, onNewTaskChange, addNewTask }) {
  const inputRef = useRef(null);

  function handleAddNewTask(event) {
    event.preventDefault();
    inputRef.current.focus();
    addNewTask();
  }

  function setInputChildRef(ref) {
    inputRef.current = ref.current;
  }

  return (
    <form className={styles.search} onSubmit={handleAddNewTask}>
      <Input
        newTask={newTask}
        onNewTaskChange={onNewTaskChange}
        setRef={setInputChildRef}
      />
      <CreateButton />
    </form>
  );
}
