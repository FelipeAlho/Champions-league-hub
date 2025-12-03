import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){
  return(
    <header className={styles.navbar}>
      <div className={styles.logo}>Champions League Hub</div>

      <input type="checkbox" id="menu-toggle" className={styles.menuToggle}/>
      <label htmlFor="menu-toggle" className={styles.hamburger}>☰</label>

      <nav className={styles.navLinks}>
        <NavLink to="/" end className={({isActive})=>isActive?styles.active:styles.link}>Home</NavLink>
        <NavLink to="/times" className={({isActive})=>isActive?styles.active:styles.link}>Times</NavLink>
        <NavLink to="/partidas" className={({isActive})=>isActive?styles.active:styles.link}>Partidas</NavLink>
        <NavLink to="/contato" className={({isActive})=>isActive?styles.active:styles.link}>Contato</NavLink>
      </nav>
    </header>
  );
}