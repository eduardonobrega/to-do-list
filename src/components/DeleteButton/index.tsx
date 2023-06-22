import { Trash } from '@phosphor-icons/react'

import styles from './styles.module.css'

export function DeleteButton({ ...props }) {
  return (
    <button className={styles.button} {...props}>
      <Trash weight="bold" />
    </button>
  )
}
