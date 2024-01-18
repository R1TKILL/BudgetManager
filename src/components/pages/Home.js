import styles from '../css/Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layouts/LinkButton'

function Home(){
    return (
        <section className={styles.home_content}>
            <h1>Bem vindo ao <span>BudgetManager</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto" />
            <img src={savings} alt="BudgetManager"/>
        </section>
    )
}

export default Home