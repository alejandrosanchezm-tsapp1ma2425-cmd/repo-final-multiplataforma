import "./Input.css"

const Input = ({type, onChange, value}) => {
    return(
        <input
            className = {type}
            onChange={onChange}
            value={value}
        >  
        </input>
    )
}

export default Input;