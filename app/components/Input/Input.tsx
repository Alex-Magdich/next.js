import React from 'react';

export type TProps = {
    label: string;
}

const Input:React.FC<TProps> = ({label}) => (
    <label className='input-control'>
        <span>{label}</span>
        <input type="text"/>
    </label>
)

export default Input;
