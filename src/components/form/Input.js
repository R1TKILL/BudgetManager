import styles from '../css/Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value, min, max }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={handleOnChange}
            />
        </div>
    )
}

export default Input