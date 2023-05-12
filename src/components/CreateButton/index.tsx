import styles from './styles.module.css';

import { PlusCircle } from '@phosphor-icons/react';

export function CreateButton() {
  return (
    <button className={styles.button}>
      Criar <PlusCircle />
    </button>
  );
}
