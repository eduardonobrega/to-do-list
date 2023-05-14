import { useRef, FormEvent, RefObject } from 'react';
import { CreateButton } from '../CreateButton';
import { Input } from '../Input';

import styles from './styles.module.css';

interface SearchProps {
  newTask: string;
  onNewTaskChange: (newTask: string) => void;
  onAddNewTask: () => void;
}

export function Search({
  newTask,
  onNewTaskChange,
  onAddNewTask,
}: SearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    if (inputRef.current) {
      inputRef.current.focus();
    }
    onAddNewTask();
  }

  function setInputChildRef(ref: RefObject<HTMLInputElement>) {
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
