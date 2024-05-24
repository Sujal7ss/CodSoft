import React from 'react';

export default function Button({children, style, img, className}){
    return(
        <button className={`border-2 rounded-full w-28 h-10 ${style} ${className}`}>
            {children}
            {img && <img src={img} />}
          </button>
          
    );
}