import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjctForm'

import styles from '../css/NewProjects.module.css'

function NewProject(){

    /*Navigate é um hook do react que auxilia no redirecionamento do usuário pra outras páginas.*/

    const navigate = useNavigate()

    /*Esta função recebe os dados atravez do handleSubmit em ProjectForm, para assim executar
    a inserção convertendo os para um JSON e redirecionando para projetos.*/
    
    function createPost(project){
        //Inicializando os serviços do BudgetManager
        project.costs = 0
        project.services = []

        //Enviando o projeto para "Banco/API" como um JSON.
        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            //Fazer o redirect
            navigate('/projects', { state: {message: 'Projeto criado com sucesso!'} })
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_content}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject