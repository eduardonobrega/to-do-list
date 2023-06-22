import { useState, useRef, FormEvent } from 'react'

import { CreateButton } from '../CreateButton'
import { Input } from '../Input'
import styles from './styles.module.css'

interface SearchProps {
  onAddNewTask: (newTask: string) => void
}

export function Search({ onAddNewTask }: SearchProps) {
  const [newTask, setNewTask] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()
    if (inputRef.current) {
      inputRef.current.focus()
    }

    setNewTask('')
    onAddNewTask(newTask)
  }

  return (
    <form className={styles.search} onSubmit={handleAddNewTask}>
      <Input onNewTaskChange={setNewTask} newTask={newTask} ref={inputRef} />
      <CreateButton />
    </form>
  )
}
