import { BsFillTrashFill } from 'react-icons/bs'

import styles from '../css/ProjectCard.module.css'

function ServiceCard({ id, name, cost, description, handleRemove }){

    const remove=(e)=>{
        e.preventDefault()
        handleRemove(id, cost)
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Custo Total:</span> R${cost}</p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}><BsFillTrashFill /> Remover</button>
            </div>
        </div>
    )
}

export default ServiceCard