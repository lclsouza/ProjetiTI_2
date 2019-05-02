import React from 'react';

export default ({id, label, type, className, name, placeholder, value, onChange}) =>  (

    <div className="cadastro-form">
        <div className='form-input'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} className={className} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
        </div>
    </div>
)


