import { useEffect, useState } from 'react'

import styles from '../css/ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({ handleSubmit, btnText, projectData }) {

    /*                      Em Adicionando option dinâmicamente

    Parte1: Nesta parte do ProjectForm, farei uma requisição a minha "API", para obter todas as
    categorias para o select diretamente do meu json, simulando um carregamento de banco de dados,
    porém obtendo (get) a resposta como json, apartir disto irei adicionar esses dados na minha 
    constante e a partir dela nos elementos html.
    
    Parte2: O react não entende bem estes tipos de requição, por isso fica mapeando os dados varias
    vezes pra saber se ele muda, ou seja fica em um loop infinito, para resolver isto usamos outro 
    hook do react, o useEffect(() => {},[]), que assim como o useState recebe nulo no seu estado
    inicial, a diferença é que ele não executa varias vezes, sem alteração ele executa apenas uma
    unica vez.
    */

    const[categories, setCategories] = useState([])
    const[project, setProject] = useState(projectData || {})

    //Adicionando option dinâmicamente
    useEffect(() => {
        fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {"Content-Type" : "application/json"}
        })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err))
    },[])

    //Recebendo o projeto montado e pelas funçoes abaixo e mandando para handleSubmit
    const submit=(e)=>{
        e.preventDefault()
        handleSubmit(project)
    }

    /*Aqui o projeto é preenchido independente do input que eu preencher*/
    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    /*Aqui o projeto é preenchido com a escolha do option*/
    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}> 
            <Input
                type="text"
                text="Nome do Projeto:"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input 
                type="number"
                text="Qual o orçamento total?"
                name="budget"
                min="0"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                handleOnChange={handleCategory}
                name="category_id"
                text="Selecione a categoria"
                option={categories}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm