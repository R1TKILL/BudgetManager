import { useState } from 'react'

import styles from '../css/CardText.module.css'

import ListContainer from '../Containers/ListContainer'

function CardText({ name_img, title, showContent, customClass, especialContent }){

    const[collapse, setCollapse] = useState(false)

    const companyValues = ["Profissionalismo", "Compromentimento", "Respeito", "Dedicação", "Diversidade"]

    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={name_img} alt='img_card' />
            </div>
            <div  className={`${styles.card_content} ${styles[collapse ? customClass : ""]}`}>
                <h3>{title}</h3>
                <p>
                    {showContent}
                </p>
                {especialContent ? (<ListContainer itens={companyValues}/>) : ("")}
            </div>
            <button onClick={() => setCollapse(prev => !prev)}>
                        {!collapse ? 'Ver Mais' : 'Ver Menos'}
            </button>
        </div>
    )
}

export default CardText