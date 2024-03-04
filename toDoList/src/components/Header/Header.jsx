import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Date: now</h1>
        <div className={styles.date}>
          <span>Day</span>:<span>Month</span>:<span>Num</span>
        </div>
      </div>
      <div className={styles.right}>

        <button className={styles.btnReload}></button>
      </div>
    </header>
  );

  
}
