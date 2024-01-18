function ListContainer({ itens }){
    return(
        <>
            <br/>
            <li>
                {itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>* {item}</p>
                    ))) : (
                        <p>Não há itens nesta Lista!</p>
                    )
                }
            </li>
        </>
    )
}

export default ListContainer