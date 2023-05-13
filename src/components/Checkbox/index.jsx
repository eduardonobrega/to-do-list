import styles from './styles.module.css';

export function Checkbox({ task, onChangeTaskStatus }) {
  function handleChangeTaskStatus() {
    onChangeTaskStatus(task);
  }

  return (
    <input
      type="checkbox"
      name=""
      id=""
      className={styles.checkbox}
      onChange={handleChangeTaskStatus}
    />
  );
}
