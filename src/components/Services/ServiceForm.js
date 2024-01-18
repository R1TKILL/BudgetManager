import { useState } from 'react'

import styles from '../css/ProjectForm.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({ handleSubmit, textBtn, projectData }) {

    const[service, setService] = useState([])
    
    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do Serviço:"
            name="name"
            placeholder="Insira o nome do Serviço"
            handleOnChange={handleChange}
            />
            <Input 
            type="number"
            text="Custo do Serviço:"
            name="costs"
            placeholder="Insira o valor total"
            handleOnChange={handleChange}
            />
            <Input 
            type="text"
            text="Dercrição do Serviço:"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
            />
            <SubmitButton text={textBtn}/>
        </form>
    )
}

export default ServiceForm