import React from 'react';

export type TProps = {
    label: string;
}

const Input:React.FC<TProps> = ({label}) => {
    return (
        <label className='input-control'>
            <span>{label}</span>
            <textarea placeholder='Write your message...'/>
        </label>
    );
};

export default Input;
