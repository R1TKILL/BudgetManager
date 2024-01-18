import styles from '../css/Loadind.module.css'
import loading from '../../img/loading.svg'

function Loading(params) {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loading"/>
        </div>
    )
}

export default Loading