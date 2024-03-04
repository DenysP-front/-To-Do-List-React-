import styles from './Footer.module.css'

export default function Footer() {
  return(<>
    <footer className={styles.footer}>
      <div className='__container'>
        <form className='new_action'>
          <input type="text" className={styles.input} placeholder='Введіть текст нової дії' />
          <button type='submit'></button>
        </form>
      </div>
    </footer>
  </>)
}