import '../App.css';
import React from 'react';

const TextInput = ({
    label = "Insert label",
    variant = "",
    placeholder,
    className,
    id,
    value,
    required,
    type = 'text',
    onChange,
    children}) => {
        // if (variant == "") {
        //     variant = ""
        // }
        // else if (variant == "") {
        //     variant = "r"
        // }
        return( 
        <div>
            <label className="text-gray-400 text-sm">
                {label}
            </label>
            <input 
                required={required}
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} appearance-none border rounded w-full mb-3 py-3.5 px-3 text-gray-700 text-sm font-PlusJakartaSans leading-tight focus:outline-none focus:shadow-outline`} 
                value={value}
                onChange={onChange}
                id={id}
                >{children}
            </input>  
        </div> 
        )
}

export {TextInput};