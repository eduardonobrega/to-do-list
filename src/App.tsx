import { ClipboardText } from '@phosphor-icons/react'
import styles from './App.module.css'
import igniteLogo from './assets/logo.svg'

import { Search } from './components/Search'
import { Task, TaskType } from './components/Task'

import './global.css'
import { useState, useEffect } from 'react'

export function App() {
  const [toDoList, setToDoList] = useState<TaskType[]>([])

  const amountOfTasks = toDoList.length
  const noTask = amountOfTasks === 0
  const amountOfCompletedTasks = toDoList.filter(
    (task) => task.completed,
  ).length

  function addNewTask(newTask: string) {
    const isNewTask = !toDoList.some((task) => task.content === newTask.trim())
    if (isNewTask) {
      setToDoList((prevState) => {
        const updatedList = [
          { content: newTask, completed: false },
          ...prevState,
        ]

        localStorage.setItem('@todoList:tasks', JSON.stringify(updatedList))
        return updatedList
      })
    } else {
      alert('Tarefa já na lista')
    }
  }

  function deleteTask(taskDeleted: string) {
    setToDoList((prevState) => {
      const updatedList = prevState.filter(
        (task) => task.content !== taskDeleted,
      )

      localStorage.setItem('@todoList:tasks', JSON.stringify(updatedList))

      return updatedList
    })
  }

  function changeTaskStatus(taskChanged: string) {
    const newArray = toDoList.map((task) => {
      if (task.content === taskChanged) {
        return {
          content: taskChanged,
          completed: !task.completed,
        }
      }
      return task
    })
    let updatedList
    const AllTasksComplete = newArray.length === amountOfCompletedTasks

    if (AllTasksComplete) {
      updatedList = newArray
    } else {
      const taskCompleted = newArray.filter((task) => task.completed)
      const pendingTask = newArray.filter((task) => !task.completed)
      updatedList = [...pendingTask, ...taskCompleted]
    }

    localStorage.setItem('@todoList:tasks', JSON.stringify(updatedList))
    setToDoList(updatedList)
  }

  useEffect(() => {
    const list = localStorage.getItem('@todoList:tasks')

    if (list) {
      setToDoList(JSON.parse(list))
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={igniteLogo} alt="" />
      </header>
      <main>
        <Search onAddNewTask={addNewTask} />
        <div className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <p>
              Tarefas criadas<span>{amountOfTasks}</span>
            </p>

            <p>
              Concluídas
              <span style={{ minWidth: '5.3rem' }}>
                {amountOfCompletedTasks} de {amountOfTasks}
              </span>
            </p>
          </div>
          <ul className={styles.toDoList}>
            {toDoList.map((task) => (
              <Task
                key={task.content}
                task={task}
                onChangeTaskStatus={changeTaskStatus}
                onDeleteTask={deleteTask}
              />
            ))}
          </ul>
          {noTask && (
            <div className={styles.empty}>
              <ClipboardText />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
