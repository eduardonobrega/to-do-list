import { useState } from 'react';
import { Task } from './components/Task';
import { Search } from './components/Search';
import { ClipboardText } from '@phosphor-icons/react';

import logo from './assets/logo.svg';
import styles from './App.module.css';
import './global.css';

function App() {
  const [toDoList, setTodoList] = useState([
    'Lavar a casa',
    'Ir para a academia',
  ]);
  const [newTask, setNewTask] = useState('');

  function addNewTask() {
    const isNewTask = !toDoList.includes(newTask);
    if (isNewTask) {
      setTodoList((prevState) => [newTask, ...prevState]);
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
          addNewTask={addNewTask}
        />

        <div className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <p>
              Tarefas criadas<span>5</span>
            </p>
            <p>
              Concluídas<span>2 de 5</span>
            </p>
          </div>
          <ul className={styles.toDoList}>
            {toDoList.map((task) => (
              <Task key={task} taskText={task} />
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
