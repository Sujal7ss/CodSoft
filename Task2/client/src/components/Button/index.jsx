import React from 'react';

export default function Button({children, onSelect, style, img, className}){
    return(
        <button onClick={onSelect} className={`border-2 w-16 rounded-md h-10 hover:bg-sky-300 md:rounded-full md:w-28 md:h-10 ${style} ${className}`}>
            {children}
            {img && <img src={img} />}
        </button>
          
    );
}