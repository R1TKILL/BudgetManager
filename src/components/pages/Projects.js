import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from '../css/Projects.module.css'

import Message from "../layouts/Message"
import LinkButton from '../layouts/LinkButton'
import Loading from '../layouts/Loading'

import Content from '../Containers/Content'

import ProjectCard from '../project/ProjectCard'

function Projects(){

    const[projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState('')

    /*O location pega valores passados nos states, verifico se o campo message há algo, se houver
    , atribuo este valor a minha variavel message.*/

    const location = useLocation()
    let message = ''

    if(location.state){
        message = location.state.message
    }

    /*Aqui vou trazer os projetos salvos na "API/Banco de Dados" e fazer uma verificação lá no 
    html, se ouver projetos na constante os exiba.*/
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {"Content-Type" : "application/json"}
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 1000)
    }, [])

    //Onde irei excluir um projeto e ativar a mensagem de exclusão.
    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        })
        .then((resp) => resp.json())
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage("Projeto removido com sucesso")
        })
        .catch((err) => console.log(err))
    }

    /*Aqui por padrão vem como sucesso, porque se chegou aqui é porque deu tudo certo, mas também
    configuro a mensagem de exclusão.
    
    Tambem estou inserindo o meu com ponente de carregamento, enquanto não se carrega todos os 
    projetos, o site o exibe e ainda um ultimo caso, em que não se há projetos.*/
    return (
        <div className={styles.project_content}>
            <div className={styles.title_content}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>
            {message && <Message msg={message} type="success" />}
            {projectMessage && <Message msg={projectMessage} type="warning" />}
            <Content customClass="start">
            {projects.length > 0 && (
                projects.map((project)=>(
                <ProjectCard
                    id={project.id}
                    name={project.name} 
                    budget={project.budget}
                    category={project.category.name}
                    key={project.id}
                    handledRemove={removeProject}
                />)))}
                {!removeLoading && (<Loading />)}
                {removeLoading && projects.length === 0 && (<p>Não há projetos cadastrados.</p>)}
            </Content>
        </div>
    )
}

export default Projects