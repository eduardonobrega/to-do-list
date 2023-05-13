import { useState } from 'react';
import { Task } from './components/Task';
import { Search } from './components/Search';
import { ClipboardText } from '@phosphor-icons/react';

import logo from './assets/logo.svg';
import styles from './App.module.css';
import './global.css';

function App() {
  const [toDoList, setTodoList] = useState([
    { content: 'Lavar a casa', completed: false },
  ]);
  const [newTask, setNewTask] = useState('');

  const amountOfTasks = toDoList.length;
  const amountOfCompletedTasks = toDoList.filter(
    (task) => task.completed
  ).length;

  function deleteTask(taskDeleted) {
    setTodoList((prevState) =>
      prevState.filter((task) => task.content !== taskDeleted)
    );
  }

  function addNewTask() {
    console.log();
    const isNewTask = !toDoList.some((task) => task.content === newTask);
    if (isNewTask) {
      setTodoList((prevState) => [
        { content: newTask, completed: false },
        ...prevState,
      ]);
    } else {
      alert('Tarefa já na lista');
    }
    setNewTask('');
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logo do todo" />
      </header>
      <main>
        <Search
          newTask={newTask}
          onNewTaskChange={setNewTask}
          onAddNewTask={addNewTask}
        />

        <div className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <p>
              Tarefas criadas<span>{amountOfTasks}</span>
            </p>
            {amountOfTasks === 0 ? (
              <p>
                Concluídas<span>0</span>
              </p>
            ) : (
              <p>
                Concluídas
                <span>
                  {amountOfCompletedTasks} de {amountOfTasks}
                </span>
              </p>
            )}
          </div>
          <ul className={styles.toDoList}>
            {toDoList.map((task) => (
              <Task
                key={task.content}
                task={task}
                onDeleteTask={deleteTask}
              />
            ))}
          </ul>
          <div className={styles.empty}>
            <ClipboardText />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
