import styles from './styles.module.css'

export function Checkbox({ ...props }) {
  return <input type="checkbox" className={styles.checkbox} {...props} />
}
