import logo from './assets/logo.svg';

import styles from './App.module.css';
import './global.css';
import { CreateButton } from './components/CreateButton';

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} alt="Logo do todo" />
      </header>
      <CreateButton />
    </div>
  );
}

export default App;
