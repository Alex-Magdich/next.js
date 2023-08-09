import React from 'react';
import styles from './contact.module.scss';

type TProps = {
    Icon: React.ReactNode;
    type: string;
    text: string;
}

export const ContactItem:React.FC<TProps> = ({ Icon, type, text, }) => {
    const href = type ? `${type}:${text}` : '#';
    return (
        <a className={styles.contactItem} href={href}>
            {Icon}
            <span>{text}</span>
        </a>
    )
}
