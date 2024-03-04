import styles from "./Main.module.css";
export default function Main() {
  return (
    <main className={styles.main}>
      <div className='__container'>
        <h3 className={styles.subtitle}></h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={`${styles["form-group"]}`}>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label className={styles["form-label"]} htmlFor="checkbox">
                Checkbox
              </label>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
