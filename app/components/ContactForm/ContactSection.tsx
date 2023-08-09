import React from 'react';
import styles from './contact-form.module.scss';
import ContactInfo from "@/app/components/ContactForm/ContactInfo";
import ContactForm from "@/app/components/ContactForm/ContactForm";

const ContactSection = () => {
    return (
        <div className={styles.formContainer}>
            <ContactInfo/>
            <ContactForm/>
        </div>
    );
};

export default ContactSection;
