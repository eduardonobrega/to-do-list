import { Search } from './components/Search';

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
        <Search/>
      </main>

    </div>
  );
}

export default App;
