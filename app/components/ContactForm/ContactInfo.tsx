import React from 'react';
import styles from './contact-form.module.scss';
import {ContactList} from "@/app/components/ContactList/ContactList";
import SocialLinks from "@/app/components/ContactForm/SocialLinks";

const ContactInfo = () => (
    <div className={styles.contactInfo}>
        <h2>Contact Information</h2>
        <p className='color-grey mt-10'>Say something to start a live chat!</p>
        <ContactList/>
        <SocialLinks/>
    </div>
)

export default ContactInfo;
