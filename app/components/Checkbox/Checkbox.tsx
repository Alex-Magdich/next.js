import React from 'react';

export type TProps = {
    label: string;
}

const Checkbox:React.FC<TProps> = ({label}) => {
    return (
        <label className='checkbox'>
            <input type="checkbox"/>
            <span>{label}</span>
            <span className="checkmark"/>
        </label>
    );
};

export default Checkbox;
