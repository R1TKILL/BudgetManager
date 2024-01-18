import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { parse, v4 as uuidv4 } from 'uuid'

import ProjectForm from '../project/ProjctForm'

import styles from '../css/Project.module.css'

import Loading from '../layouts/Loading'
import Message from '../layouts/Message'

import Content from '../Containers/Content'

import ServiceForm from '../Services/ServiceForm'
import ServiceCard from '../Services/ServiceCard'

function Project() {

    const[project, setProject] = useState([])
    const[showProjectForm, setShowProjectForm] = useState(false)
    const[message, setMessage] = useState()
    const[typeMessage, setTypeMessage] = useState()
    const[showServiceForm, setShowServiceForm] = useState(false)
    const[services, setServices] = useState([])


    //Pega paramentrôs da url, o que especifico neste caso é o id.
    const { id } = useParams()

    /*Resgatando os dados da API pelo id do projeto.*/
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {"Content-Type" : "application/json"}
            })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
                setServices(data.services)
            })
            .catch((err) => console.log(err))
            }, 1000)
    }, [id])

    //Este método serve para a adição de Serviços no projeto e regras para os valores.
    function createService(project){
        setMessage('')

        //Basicamente o uuid vai criar ids unicos para estes serviços
        const lastService = project.services[project.services.length - 1]
        lastService.id = uuidv4()

        //Valor do ultimo serviço, no caso o atual.
        const lastServiceCost = lastService.costs

        //Valor do dinheiro gasto somado ao valor do ultimo serviço que pode ou não ser adicionado.
        const newCost = parseFloat(project.costs) + parseFloat(lastServiceCost)

        /*Caso o valor do serviço adicionado somado ao valor do dinheiro investido for maior que o
        valor do projeto inteiro, não adiciona e avisa com uma mensagem, senão adiciona este serviço*/
        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento insuficiente, verifique o valor do serviço!')
            setTypeMessage('error')
            project.services.pop()
            return false
        }

        //Se der certo vai atualizar com a adição deste serviço.
        project.costs = newCost

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setShowServiceForm(false)
        })
        .catch((err) => console.log(err))
    }

    function removeService(id, cost){

        const serviceUpdated = project.services.filter(
            (service) => service.id !== id
        )

        /*Para remover pego uma constante sem o serviço que retirei acima e atualizo os serviços e
        os custos.*/
        const projectUpdated = project
        projectUpdated.services = serviceUpdated
        projectUpdated.costs = parseFloat(projectUpdated.costs) - parseFloat(cost)
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(projectUpdated)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(projectUpdated)
            setServices(serviceUpdated)
            setMessage('Serviço removido com sucesso!')
            setTypeMessage('success')
        })
        .catch((err) => console.log(err))

    }

    //Vai alterar o estado de exibição do showProjectForm, para saber se esta ou não em edição.
    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project){
        setMessage('')

        //O valor investido não pode ser menor do que o dos gastos.
        if(project.budget < project.costs){
            setTypeMessage("warning")
            setMessage("O orçamento não pode ser menor que o custo do projeto!")
            return false
        }

        /*O método desta rota sera o PATCH, que só atualiza o que é especificado, diferente do 
        UPDATE que atualiza tudo.*/
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setTypeMessage("success")
            setMessage("O projeto foi atualizado!")
        })
        .catch((err) => console.log(err))
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Content customClass="column">
                        {message && <Message type={typeMessage} msg={message}/>}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar edição'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>Project Form</p>
                                    <p><span>Categoria: </span>{project.category.name}</p>
                                    <p><span>Total de Orçamento: </span>R${project.budget}</p>
                                    <p><span>Total Utilizado: </span>R${project.costs}</p>

                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm 
                                        btnText="Concluir edição"
                                        projectData={project}
                                        handleSubmit={editPost}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um Serviço:</h2> 
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar adição de serviço'}
                            </button>{}
                            <div className={styles.project_info}>
                                {showServiceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        textBtn="Adicionar serviço"
                                        projectData={project}
                                        />
                                )}
                            </div>
                        </div>
                        <h2>Serviços:</h2>
                        <Content customClass="start">
                            {services.length > 0 && (
                                services.map((service) => (
                                    <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.costs}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                    />
                                ))
                            )}
                            {services.length === 0 && <p>Não há serviços cadastrados</p>}
                        </Content>
                    </Content>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project