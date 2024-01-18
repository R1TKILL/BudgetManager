import styles from '../css/Company.module.css'

import missao from '../../img/missao.png'
import valores from '../../img/valores.jpg'
import visao from '../../img/visao.jpeg'

import Content from '../Containers/Content'

import CardText from '../layouts/CardText'

function Company(){
    return (
        <div className={styles.company_content}>
            <div className={styles.title_content}>
                <h1>Sobre o <span>BudgetManager</span></h1>
            </div>
            <div className={styles.text_content}>
                <p>
                    &emsp;&emsp; A <span>BudgetManager</span> nasceu da necessidade de muitos usuários
                    que ansiavam obter uma forma mais dinâmica de organizar os seus projetos, por isso
                    construimos esta plataforma magnifica, elegante e clean, que oferece aos clientes
                    esta incrivel oportunidade de experimentar uma opção de organização entre projetos
                    e serviços de forma que sem muitas etapas e empecilhos, se possa usufruir ao maximo
                    desta ferramenta.
                </p>
            </div>
            <Content customClass="start">
                <CardText
                    name_img={missao}
                    title="Nossa Missão"
                    showContent="
                    Nosso maior e principal objetivo é construir e proporcionar a você, a melhor experiência do
                    mercado de planejamentos de projetos, por meio de nossos métodos inovadorares onde usuário 
                    tem a facilidade de resolver problemas na gestão de organizar etapas e classificações de projetos,
                    acreditamos assim estar levando uma maior qualidade de vida aos que aderem esta ferramenta em suas 
                    vidas, ainda, não só temos a certeza de auxiliar a organizar seus projetos, mas sim, o seu futuro.
                    "
                    especialContent={false}
                    customClass="expanded"
                />
                <CardText
                    name_img={valores}
                    title="Nossos Valores"
                    showContent="
                    Em meio a diversa gama de valores de hoje em dia que temos constuido em sociedade que somos,
                    é tênue escolher uma quantidade tão infima a respeito do acreditamos representar a nossa institução,
                    por isso vamos listar os principais para fazer-mos a diferença.
                    "
                    especialContent={true}
                    customClass="expanded"
                />
                <CardText
                    name_img={visao}
                    title="Nossa Visão"
                    showContent="
                    Mostrar o quão importante é organizar bem e com facilidade projetaros projetos da sua vida,
                    que com as ferramentas certas ao lado de nossos clientes, seja perceptivel a enorme produtividade
                    que as mesmas podem render no seu dia a dia, deixando claro nossa responsabilidade no mercado.
                    "
                    especialContent={false}
                    customClass="expanded"
                />
            </Content>
        </div>
    )
}

export default Company