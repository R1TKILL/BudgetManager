import { useState, useEffect } from 'react'


import styles from '../css/Message.module.css'

function Message({ type, msg }) {

    const[visible, setVisible] = useState(false)

    /*Aqui a lógica é, que se houver mensagem, exibe por 3 segundos, senão não exibe nada*/
    useEffect(() => {

        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    //Outra classe dinâmica para sucesso ou falha.
    return (
        <>
            {visible && (<div className={`${styles.message} ${styles[type]}`}>{msg}</div>)}
        </>
    )
}

export default Message