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

const CheckInButton = ({
    type = "button",
    variant = "button-checkin",
    className,
    id,
    onClick,
    children}) => {
        if (variant == "button-checkin") {
            variant = "bg-azureish-white hover:border-magic-mint text-go-green hover:border-4"
        }
        else if (variant == "button-checkout") {
            variant = "bg-danger hover:border-candy-pink text-primarywhite hover:border-4"
        }
        return( 
        // <div className="button-container">   
            <button 
                type={type}
                className={`${className} ${variant} w-60 h-60 rounded-full text-xl font-bold hover:shadow-focus`} 
                onClick={onClick}
                id={id}
                >{children}
            </button>  
        // </div> 
        )
}

export {Button, OutlineButton, CheckInButton};

