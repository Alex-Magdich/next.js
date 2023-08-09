import React from 'react';
import Icon1 from '../../../public/social-1.svg';
import Icon2 from '../../../public/social-2.svg';
import Icon3 from '../../../public/social-3.svg';
import styles from './contact-form.module.scss';

const SocialLinks = () => (
    <div className={styles.socialItems}>
        <a href="#" target='_blank' className={styles.socialItem}><Icon3/></a>
        <a href="#" target='_blank' className={styles.socialItem}><Icon2/></a>
        <a href="#" target='_blank' className={styles.socialItem}><Icon1/></a>
    </div>
)

export default SocialLinks;
