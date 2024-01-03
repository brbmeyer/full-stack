import styles from './NavBar.module.css'

/**
 * @param {{ title: string | JSX.Element }} param0 
 */
export const NavBar = ({ title }) => {
    return <div className={styles.nav}>
        <b>{ title }</b>
    </div>
}
