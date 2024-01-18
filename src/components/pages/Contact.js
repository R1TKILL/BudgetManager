import { MdOutlineEast } from 'react-icons/md'

import styles from '../css/Contact.module.css'

import lecture from '../../img/lecture.jpg'

import Input from '../form/Input'

function Contact(){
    return (
        <>  
            <div className={styles.BigText}>
                <h1>Quer falar com gente?</h1>
                <h3>Envie sua mensagem pelo formulário <br/> abaixo para combinarmos um cafézinho online</h3>
            </div>
            <div className={styles.baseForm}>
                <div className={styles.infoText}>
                    <h5>AtendimentoBudgetManger@gmail.com</h5>
                    <h5>R, Maria de Nazaré, 322</h5>
                    <h5>Cidade Velha, Belém, Pará</h5>
                </div>
                <div className={styles.FormContact}>
                    <div className={styles.inputField}>
                        <Input type='text' placeholder='Nome*'/>
                        <Input type='text' placeholder='E-mail*'/>
                    </div>
                    <div className={styles.longInputField}>
                        <Input type='text' placeholder='Como podemos ajudar?*'/>
                    </div>
                    <div className={styles.btnForm}>
                        <button>Enviar <MdOutlineEast/></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact