import '../App.css';
import React from 'react';

const Button = ({
    type = "button",
    variant = "button-primary",
    className,
    id,
    onClick,
    children}) => {
        if (variant == "button-primary") {
            variant = "bg-primary"
        }
        else if (variant == "button-danger") {
            variant = "bg-danger"
        }
        return( 
        // <div className="button-container">   
            <button 
                type={type}
                variant={variant}
                className={`${className} ${variant} rounded-xl shadow p-3 m-2 text-xs font-bold text-white`} 
                onClick={onClick}
                id={id}
                >{children}
            </button>  
        // </div> 
        )
}

const OutlineButton = ({
    type = "button",
    variant = "button-primary",
    className,
    id,
    onClick,
    children}) => {
        if (variant == "button-primary") {
            variant = "border-primary text-primary"
        }
        else if (variant == "button-danger") {
            variant = "border-danger text-danger"
        }
        return( 
        // <div className="button-container">   
            <button 
                type={type}
                variant={variant}
                className={`${className} ${variant} rounded-xl shadow p-3 m-2 text-xs font-boldbg-white border-2`} 
                onClick={onClick}
                id={id}
                >{children}
            </button>  
        // </div> 
        )
}

export {Button, OutlineButton};

