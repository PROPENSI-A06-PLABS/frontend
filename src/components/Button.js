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
                className={`${className} ${variant} inline-flex w-full justify-center rounded-[25px] px-3 py-2 hover:brightness-90 shadow text-xs font-bold text-white sm:w-[129px]`} 
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
                className={`${className} ${variant} inline-flex w-full justify-center rounded-[25px] hover:brightness-90 shadow px-3 py-2 text-xs font-bold bg-transparent border-[1px] sm:w-[129px]`} 
                onClick={onClick}
                id={id}
                >{children}
            </button>  
        // </div> 
        )
}

export {Button, OutlineButton};

