import React from 'react';
import User from '../../../public/user.svg';
import Cart from '../../../public/cart.svg';
import styles from './header.module.scss';

const Additional = () => (
    <div className={styles.additionalItems}>
        <a href="#" className={styles.additionalItem}>
            <User/>
        </a>
        <a href="#" className={styles.additionalItem}>
            <Cart/>
        </a>
    </div>
)

export default Additional;
