import '../App.css';

const Button = ({
    color = "blue",
    name = "name",
    disabled = false,
    onClick}) => {
    const onButtonClick = () => { 
        if(onClick){  onClick(name); 
        }
    } 
    return( 
    <div className="button-container">   
        <button disabled={disabled} className={`${color} rounded-xl shadow border-dashed border-2 border-sky-500 p-8 m-10`} onClick={onButtonClick}>{name}
        </button>  
    </div> 
    )
}

export default Button;