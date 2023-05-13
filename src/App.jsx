import { Task } from './components/Task';
import { Search } from './components/Search';
import { ClipboardText } from '@phosphor-icons/react';

import logo from './assets/logo.svg';
import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logo do todo" />
      </header>
      <main>
        <Search />

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
            <Task />
            <Task />
            <Task />
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
