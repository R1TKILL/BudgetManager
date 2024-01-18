import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from '../css/Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className={styles.copyright}>
                Todos os direitos de <span>BudgetManager</span> &copy; - 2023 Reservados para R1TKILL
            </p>
        </footer>
    )
}

export default Footer