import styles from '../css/ContentContainer.module.css'

function Content(props){
    /*Essa é uma forma de pegar classes css dinâmicamente, pois não quero que estas se espalhem
    para os outros containers, apenas os que a tiverem como parâmetro, nesta por exemplo garanto
    um conteudo minimo ná página, mas não irei precisar em todas, por isto customClass, só quando
    for necessária.*/
    
    return (
        <div className={`${styles.container_content} ${styles[props.customClass]}`}>
            {props.children}
        </div>)
}

export default Content