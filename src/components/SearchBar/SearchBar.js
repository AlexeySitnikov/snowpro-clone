/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './styles.module.scss'

export function SearchBar() {
  return (
    <div className={`${styles.displayNone}`}>
      <form>
        <input
          type="text"
          placeholder="Искать здесь..."
          value=""
          onChange={(e) => (e.target.value)}
        />
        <label htmlFor="search">🔍</label>
        {/* <input type="button" name="search" /> */}
      </form>
    </div>
  )
}
