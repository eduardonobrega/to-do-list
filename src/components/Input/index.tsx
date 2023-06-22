import styles from './styles.module.css'
import { forwardRef, ChangeEvent, InvalidEvent, ForwardedRef } from 'react'

interface InputProps {
  onNewTaskChange: (newTask: string) => void
  newTask: string
}

export const Input = forwardRef(
  (
    { onNewTaskChange, newTask }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
      event.target.setCustomValidity('Informe uma tarefa!')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
      event.target.setCustomValidity('')
      onNewTaskChange(event.target.value)
    }

    return (
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        className={styles.input}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        ref={ref}
        required
        autoFocus
      />
    )
  },
)
Input.displayName = 'Input'
