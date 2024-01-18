import { Link } from "react-router-dom"

import Content from "../Containers/Content"

import styles from '../css/Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Content>
            <Link to="/"><img src={logo} alt="logo-BudgetManager"/></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/company">Empresa</Link></li>
                <li className={styles.item}><Link to="/contact">Contatos</Link> </li> 
            </ul>
            </Content>
        </nav>
    )
}

export default Navbar